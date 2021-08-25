import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Home from '../views/Home';
import Orders from '../views/Orders';
import Mailbox from '../views/Mailbox';
import Settings from '../views/Settings';
import DeletedOrders from '../views/DeletedOrders';
import SingleEmail from '../views/SingleEmail';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.orders} component={Orders} />
          <Route path={routes.mailbox} component={Mailbox} />
          <Route path={routes.deleted} component={DeletedOrders} />
          <Route path={routes.settings} component={Settings} />
          <Route path={routes.singleEmail} component={SingleEmail} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
