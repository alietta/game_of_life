import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  isAuth: boolean;
}

export const PrivateRoute: React.FC<Props> = ({
  children,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )}
    />
  );
};
