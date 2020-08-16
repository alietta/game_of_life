import React, { FC } from 'react';
import { WithHeadbarLayout } from '@/layouts/WithHeadbarLayout';
import { GameControls } from '@/modules/GameControls';

export const GamePage: FC = () => {
  return (
    <WithHeadbarLayout>
      <GameControls />
    </WithHeadbarLayout>
  );
};
