import React from 'react';
import { action } from '@storybook/addon-actions';
import { DarkMode, LightMode  } from 'sancho';
import { LoginForm } from './index';

export default { title: 'LoginForm' };

export const login = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <LoginForm onSubmit={action('onSubmit')} />
    </DarkMode>
    <LightMode>
      <LoginForm onSubmit={action('onSubmit')} />
    </LightMode>
  </div>
);
