import React, { FC } from 'react';
import { WithHeadbarLayout } from '@/layouts/WithHeadbarLayout';
import { GameSettings } from '@/modules/GameSettings';
import { Field } from '@/modules/Field';

export const SettingsPage: FC = () => {
  return (
    <WithHeadbarLayout>
      <GameSettings />
      <Field />
    </WithHeadbarLayout>
  );
};
