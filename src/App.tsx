import { Switch } from 'react-router';

import { PageLogin } from '~/features/PageLogin';
import { PageMain } from '~/features/PageMain';
import { PageNotFound } from '~/shared/components/PageNotFound';
import { PublicRoute } from '~/shared/components/PublicRoute';
import { Routes } from '~/shared/constants/Routes';

import { FramerPage } from './features/FramerPage/FramerPage';

export const App = () => {
  return (
    <Switch>
      <PublicRoute path={Routes.INDEX} exact component={PageMain} />
      <PublicRoute path={Routes.LOGIN} restricted exact component={PageLogin} />
      <PublicRoute path={Routes.FRAMER} component={FramerPage} />
      <PublicRoute component={PageNotFound} />
    </Switch>
  );
};
