import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from '@/pages/LoginPage';
import { GamePage } from '@/pages/GamePage';
import { SettingsPage } from '@/pages/SettingsPage';
import { PrivateRoute } from './PrivateRoute';

interface Props {
  isAuth: boolean;
}

export const BaseRoutes: React.FC<Props> = props => {
  const { isAuth } = props;
  return (
    <Switch>
      <PrivateRoute isAuth={isAuth} path="/game" exact>
        <GamePage />
      </PrivateRoute>
      <PrivateRoute isAuth={isAuth} path="/settings" exact>
        <SettingsPage />
      </PrivateRoute>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="*">
        <Redirect to={{ pathname: '/settings' }} />
      </Route>
    </Switch>
  );
};
