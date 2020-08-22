import React from 'react';
import { action } from '@storybook/addon-actions';
import { DarkMode, LightMode, Layer } from 'sancho';
import { Header } from './index';

export default { title: 'Headbar' };

export const headbar = () => (
  <div>
    <DarkMode>
      <Header name='Anna' onLogout={action('logout')} switchTheme={action('switchTheme')} />
    </DarkMode>
    <LightMode>
      <Header name='Anna' onLogout={action('logout')} switchTheme={action('switchTheme')} />
    </LightMode>
  </div>
);
