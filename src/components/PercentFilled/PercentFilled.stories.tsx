import React from 'react';
import { DarkMode, LightMode, Layer } from 'sancho';
import { PercentFilled } from './index';

export default { title: 'inputs' };

export const Percent = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <Layer css={{ borderRadius: 0 }}>
        <PercentFilled />
      </Layer>
    </DarkMode>
    <LightMode>
      <Layer css={{ borderRadius: 0 }}>
        <PercentFilled />
      </Layer>
    </LightMode>
  </div>
);
