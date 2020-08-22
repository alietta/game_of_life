import React from 'react';
import { DarkMode, LightMode, Layer } from 'sancho';
import { RangeLabeledInput } from './index';

export default { title: 'inputs' };

export const RangeStory = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <Layer css={{ borderRadius: 0 }}>
        <RangeLabeledInput labelName="field size" />
      </Layer>
    </DarkMode>
    <LightMode>
      <Layer css={{ borderRadius: 0 }}>
        <RangeLabeledInput
          labelName="value"
          step={0.5}
          formValue={(value: string) => `${value} x ${value}`}
        />
      </Layer>
    </LightMode>
  </div>
);
