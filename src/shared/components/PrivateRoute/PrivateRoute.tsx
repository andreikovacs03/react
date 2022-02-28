import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '~/shared/atoms';
import { Routes } from '~/shared/constants/Routes';

interface Props {
  component: FC;
  [propName: string]: unknown;
}

export const PrivateRoute = ({ component, ...rest }: Props) => {
  const auth = useRecoilValue(authAtom);

  return auth ? (
    <Route component={component} {...rest} />
  ) : (
    <Redirect to={Routes.LOGIN} />
  );
};
