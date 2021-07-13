import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Home from '../views/Home';
import Orders from '../views/Orders';
import Charts from '../views/Charts';
import Settings from '../views/Settings';
import DeletedOrders from '../views/DeletedOrders';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.orders} component={Orders} />
          <Route path={routes.charts} component={Charts} />
          <Route path={routes.deleted} component={DeletedOrders} />
          <Route path={routes.settings} component={Settings} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
