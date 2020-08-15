import React, { FC, useState, ChangeEvent } from 'react';
import { Layer, Button } from 'sancho';
import { RangeLabeledInput } from '@/components/RangeLabeledInput';
import { PercentFilled } from '@/components/PercentFilled';
import { SettingsRow, SettingsElement, LayerStyle } from './SettingElements';

interface Props {}

const Settings: FC<Props> = props => {
  return (
    <form action="" css={{ width: '100%' }}>
      <Layer css={LayerStyle} elevation="xs">
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
        <Button>Start Game</Button>
      </Layer>
    </form>
  );
};

export { Settings };
