import React from 'react';
import { DarkMode, LightMode, Layer } from 'sancho';
import { action } from '@storybook/addon-actions';
import { Settings } from './index';

export default { title: 'settings' };

export const settings = () => (
  <div css={{ width: '100%' }}>
    <DarkMode>
      <Settings
        onSubmit={action('submit')}
        field={{
          labelName: 'Field size',
          formValue: (value: string) => `${value} x ${value}`,
          onValueChange: action('field change'),
          min: 10,
          max: 100,
        }}
        cell={{
          labelName: 'Cell size',
          formValue: (value: string) => `${value} x ${value}`,
          onValueChange: action('cell change'),
          min: 5,
          max: 25,
        }}
        speed={{
          labelName: 'Start speed',
          formValue: (value: string) => `x${value}`,
          onValueChange: action('speed change'),
          min: 0.1,
          max: 5,
          step: 0.1,
        }}
        percent={{
          onValueChange: action('percent change'),
        }}
      />
    </DarkMode>
  </div>
);
