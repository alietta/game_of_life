import React from 'react';
import { DarkMode, LightMode, Layer } from 'sancho';
import { RangeLabeledInput } from './index';

export default { title: 'inputs' };

export const login = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <Layer>
        <RangeLabeledInput labelName="field size" />
      </Layer>
    </DarkMode>
    <LightMode>
      <Layer>
        <RangeLabeledInput
          labelName="value"
          step={2}
          formValue={(value: string) => `${value} x ${value}`}
        />
      </Layer>
    </LightMode>
  </div>
);
