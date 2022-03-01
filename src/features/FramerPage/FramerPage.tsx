import { Switch, useRouteMatch } from 'react-router';

import { PublicRoute } from '~/shared/components/PublicRoute';
import { FramerRoutes } from '~/shared/constants/Routes';

import { Example } from './Example/Example';

export const FramerPage = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <PublicRoute
        path={`${path}${FramerRoutes.EXAMPLE}`}
        exact
        component={Example}
      />
    </Switch>
  );
};
