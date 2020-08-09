import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkMode } from 'sancho';
import { BaseRoutes } from '@/routes/BaseRoutes';

export const App: FC = () => {
  const isAuth = true;

  return (
    <DarkMode>
      <BrowserRouter>
        <BaseRoutes isAuth={isAuth} />
      </BrowserRouter>
    </DarkMode>
  );
};
