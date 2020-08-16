import React, { FC } from 'react';
import { WithHeadbarLayout } from '@/layouts/WithHeadbarLayout';
import { GameControls } from '@/modules/GameControls';
import { Field } from '@/modules/Field';

export const GamePage: FC = () => {
  return (
    <WithHeadbarLayout>
      <GameControls />
      <Field />
    </WithHeadbarLayout>
  );
};
