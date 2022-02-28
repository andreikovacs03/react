import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';

import { authAtom } from '~/shared/atoms';
import { useAxiosClient } from '~/shared/hooks/useAxiosClient';
import { LoginInput } from '~/shared/types/user';

export const useUserActions = () => {
  const { client } = useAxiosClient();
  const history = useHistory();
  const [auth, setAuth] = useRecoilState(authAtom);

  const login = async ({ username, password }: LoginInput) =>
    client
      .post('/account/login/', {
        username,
        password,
      })
      .then((response) => {
        const { access, refresh } = response.data;

        // add tokens to recoil (and localStorage with recoil-persist)
        setAuth({ access, refresh });

        return response.data;
      });

  const logout = () => {
    client.post('/account/logout', { refresh: auth.refresh });

    // remove user by setting auth state to null then redirect to login page
    setAuth(null);
    history.push('/login');
  };

  return {
    login,
    logout,
  };
};
