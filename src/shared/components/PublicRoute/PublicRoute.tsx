import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '~/shared/atoms';
import { Routes } from '~/shared/constants/Routes';

interface Props {
  component: FC;
  restricted?: boolean;
  [propName: string]: unknown;
}

export const PublicRoute = ({ component, restricted, ...rest }: Props) => {
  const auth = useRecoilValue(authAtom);

  return auth && restricted ? (
    <Redirect to={Routes.INDEX} />
  ) : (
    <Route component={component} {...rest} />
  );
};
