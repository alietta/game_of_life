import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Controls } from '@/components/Controls';
import history from '@/rdx/history';
import { actions } from './duck/reducer';

export const GameControls: FC = () => {
  const dispatch = useDispatch();
  const changeSpeed = (value: string) => {
    dispatch(actions.changeSpeed(value));
  };
  const resetGame = () => {
    dispatch(actions.reset());
    history.push('/settings');
  };

  return (
    <div>
      <Controls
        resetGame={resetGame}
        changeSpeed={changeSpeed}
      />
    </div>
  );
};
