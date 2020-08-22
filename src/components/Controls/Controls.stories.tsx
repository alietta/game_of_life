import React from 'react';
import { action } from '@storybook/addon-actions';
import { DarkMode, LightMode, Layer } from 'sancho';
import { Controls } from './index';

export default { title: 'controls' };

export const GameControls = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <Layer css={{ borderRadius: 0 }}>
        <Controls resetGame={action('reset')} changeSpeed={action('changeSpeed')} />
      </Layer>
    </DarkMode>
    <LightMode>
      <Layer css={{ borderRadius: 0 }}>
        <Controls resetGame={action('reset')} changeSpeed={action('changeSpeed')} />
      </Layer>
    </LightMode>
  </div>
);
