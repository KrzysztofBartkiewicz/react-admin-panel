import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context';
import routes from './routes';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import Orders from '../views/Orders';
import Mailbox from '../views/Mailbox';
import Settings from '../views/Settings';
import DeletedOrders from '../views/DeletedOrders';
import SingleEmail from '../views/SingleEmail';
import Login from '../views/Login';
import Spinner from '../components/utils/Spinner';

const Router = () => {
  const { currentUser } = useContext(AuthContext);

  const renderBrowserRouter = () => (
    <BrowserRouter>
      {typeof currentUser === 'object' && (
        <Redirect to={{ path: routes.home }} />
      )}
      <Switch>
        <PrivateRoute
          exact
          path={routes.home}
          isLogged={currentUser}
          component={Home}
        />
        <PrivateRoute
          path={routes.orders}
          isLogged={currentUser}
          component={Orders}
        />
        <PrivateRoute
          path={routes.mailbox}
          isLogged={currentUser}
          component={Mailbox}
        />
        <PrivateRoute
          path={routes.deleted}
          isLogged={currentUser}
          component={DeletedOrders}
        />
        <PrivateRoute
          path={routes.settings}
          isLogged={currentUser}
          component={Settings}
        />
        <PrivateRoute
          path={routes.singleEmail}
          isLogged={currentUser}
          component={SingleEmail}
        />
        <Route path={routes.login} component={Login} />
      </Switch>
    </BrowserRouter>
  );

  return <>{currentUser ? renderBrowserRouter() : <Spinner />}</>;
};

export default Router;
