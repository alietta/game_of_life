import React, { FC } from 'react';
import { ConnectedRouter  } from 'connected-react-router';
import { BaseRoutes } from '@/routes/BaseRoutes';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import history from '@/rdx/history';
import { Loader } from '@/components/Loader';

import { AppTheme } from './AppTheme';

export const App: FC = () => {
  const isAuth = useStoreSelector(state => state.user.isAuth);
  const { status, darkTheme }= useStoreSelector(state => state.app);

  return (
    <AppTheme darkTheme={darkTheme}>
      {status === 'loading' ? (
        <Loader />
        ) : (
          <ConnectedRouter history={history}>
            <BaseRoutes isAuth={isAuth} />
          </ConnectedRouter>
        )}
    </AppTheme>
  );
};



