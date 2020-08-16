import React, { FC } from 'react';
import { WithoutHeadbarLayout } from '@/layouts/WithoutHeadbarLayout';
import { Login } from '@/modules/Login';

export const LoginPage: FC = () => {
  return (
    <WithoutHeadbarLayout>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Login />
      </div>
    </WithoutHeadbarLayout>
  );
};
