import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkMode, LightMode } from 'sancho';
import { BaseRoutes } from '@/routes/BaseRoutes';

export const App: FC = () => {
  const isAuth = true;
  const darkTheme = true;

  return darkTheme ? (
    <DarkMode>
      <BrowserRouter>
        <BaseRoutes isAuth={isAuth} />
      </BrowserRouter>
    </DarkMode>
  ) : (
    <LightMode>
      <BrowserRouter>
        <BaseRoutes isAuth={isAuth} />
      </BrowserRouter>
    </LightMode>
  );
};



