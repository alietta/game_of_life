import React, { FC } from 'react';
import { WithHeadbarLayout } from '@/layouts/WithHeadbarLayout';
import { Settings } from '@/components/Settings';

export const SettingsPage: FC = () => {
  return (
    <WithHeadbarLayout>
      <Settings
        onSubmit={() => {}}
        field={{
          labelName: 'Field size',
          formValue: (value: string) => `${value} x ${value}`,
          min: 10,
          max: 100,
        }}
        cell={{
          labelName: 'Cell size',
          formValue: (value: string) => `${value} x ${value}`,
          min: 5,
          max: 25,
        }}
        speed={{
          labelName: 'Start speed',
          formValue: (value: string) => `x${value}`,
          min: 0.1,
          max: 5,
          step: 0.1,
        }}
        percent={{
          onValueChange: () => {},
        }}
      />
    </WithHeadbarLayout>
  );
};
