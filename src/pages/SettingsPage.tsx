import React, { FC } from 'react';
import { WithHeadbarLayout } from '@/layouts/WithHeadbarLayout';
import { GameSettings } from '@/modules/GameSettings';

export const SettingsPage: FC = () => {
  return (
    <WithHeadbarLayout>
      <GameSettings />
    </WithHeadbarLayout>
  );
};
