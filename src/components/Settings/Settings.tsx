import React, { FC, useState, MouseEvent } from 'react';
import { Layer, Button } from 'sancho';
import { RangeLabeledInput, RangeLabeledInputProps } from '@/components/RangeLabeledInput';
import { PercentFilled, PercentFilledProps } from '@/components/PercentFilled';
import { SettingsRow, SettingsElement, LayerStyle } from './SettingStyle';

interface Props {
  onSubmit: () => void;
  field?: RangeLabeledInputProps;
  cell?: RangeLabeledInputProps;
  speed?: RangeLabeledInputProps;
  percent?: PercentFilledProps;
}

export const Settings: FC<Props> = props => {
  const {
    onSubmit,
    field = { labelName: 'Field size' },
    cell = { labelName: 'Cell size' },
    speed = { labelName: 'Start speed' },
    percent,
  } = props;
  const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form action="" css={{ width: '100%' }} onSubmit={handleSubmit}>
      <Layer css={LayerStyle} elevation="xs">
        <SettingsRow>
          <SettingsElement>
            <RangeLabeledInput {...field} />
          </SettingsElement>
          <SettingsElement>
            <RangeLabeledInput {...cell} />
          </SettingsElement>
        </SettingsRow>
        <SettingsRow>
          <SettingsElement>
            <PercentFilled {...percent} />
          </SettingsElement>
          <SettingsElement>
            <RangeLabeledInput {...speed} />
          </SettingsElement>
        </SettingsRow>
        <Button type="submit">Start Game</Button>
      </Layer>
    </form>
  );
};
