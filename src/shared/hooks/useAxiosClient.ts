import axios from 'axios';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';

import { authAtom } from '~/shared/atoms';
import { decodeToken } from '~/shared/utils/token';

export const useAxiosClient = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const history = useHistory();

  const REFRESH_TOKEN_URL = '/account/login/refresh/';

  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });

  client.interceptors.request.use((request) => {
    request.headers.authorization = `Bearer ${auth?.access}`;
    return request;
  });

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const requestConfig = error.config;

      // if refresh token is invalid, log out
      if (
        error.response.status === 401 &&
        requestConfig.url === REFRESH_TOKEN_URL
      ) {
        // log out
        setAuth(null);
        history.push('/');
      }

      // if access token is invalid, get new access token
      if (
        error.response.data.code === 'token_not_valid' &&
        error.response.status === 401 &&
        error.response.statusText === 'Unauthorized'
      ) {
        const refreshToken = auth.refresh;

        if (refreshToken) {
          const decodedToken = decodeToken(refreshToken);
          const now = Math.ceil(Date.now() / 1000);

          if (decodedToken.exp > now) {
            try {
              const response = await client.post(REFRESH_TOKEN_URL, {
                refresh: refreshToken,
              });

              const { access, refresh } = response.data;

              setAuth({ access, refresh });

              return client(requestConfig);
            } catch (e) {
              // error
            }
          }
        }

        // log out
        setAuth(null);
        history.push('/');
      }

      // specific error handling done elsewhere
      return Promise.reject(error);
    },
  );

  return { client };
};
