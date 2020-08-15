import React from 'react';
import { DarkMode, LightMode, Layer } from 'sancho';
import { Settings } from './index';

export default { title: 'settings' };

export const settings = () => (
  <div css={{ width: '100%' }}>
    <DarkMode>
      <Settings />
    </DarkMode>
  </div>
);
