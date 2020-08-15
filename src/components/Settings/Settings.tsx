import React, { FC, useState, ChangeEvent } from 'react';
import { Layer } from 'sancho';
import { RangeLabeledInput } from '@/components/RangeLabeledInput';
import { PercentFilled } from '@/components/PercentFilled';
import { SettingsRow, SettingsElement } from './SettingElements';

interface Props {}

const Settings: FC<Props> = props => {
  return (
    <Layer>
      <SettingsRow>
        <SettingsElement>
          <RangeLabeledInput labelName="Field size" />
        </SettingsElement>
        <SettingsElement>
          <RangeLabeledInput labelName="Cell size" />
        </SettingsElement>
      </SettingsRow>
      <SettingsRow>
        <SettingsElement>
          <PercentFilled />
        </SettingsElement>
        <SettingsElement>
          <RangeLabeledInput labelName="Start speed" />
        </SettingsElement>
      </SettingsRow>
    </Layer>
  );
};

export { Settings };
