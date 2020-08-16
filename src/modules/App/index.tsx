import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BaseRoutes } from '@/routes/BaseRoutes';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { Loader } from '@/components/Loader';

import { AppTheme } from './AppTheme';

export const App: FC = () => {
  const isAuth = true;
  const { status, darkTheme }= useStoreSelector(state => state.app);

  return (
    <AppTheme darkTheme={darkTheme}>
      {status === 'loading' ? (
        <Loader />
        ) : (
          <BrowserRouter>
            <BaseRoutes isAuth={isAuth} />
          </BrowserRouter>
        )}
    </AppTheme>
  );
};



