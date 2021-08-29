import React from 'react';
import { Redirect, Route } from 'react-router';
import NavigationTemplate from '../templates/NavigationTemplate';
import routes from './routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(typeof rest.isLogged);
  return (
    <NavigationTemplate>
      <Route
        {...rest}
        render={(props) =>
          typeof rest.isLogged === 'object' ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: routes.login }} />
          )
        }
      />
    </NavigationTemplate>
  );
};

export default PrivateRoute;
