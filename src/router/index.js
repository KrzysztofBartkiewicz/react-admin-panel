import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Home from '../views/Home';
import Orders from '../views/Orders';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.orders} component={Orders} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
