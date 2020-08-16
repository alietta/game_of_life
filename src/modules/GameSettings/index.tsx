import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { Settings } from '@/components/Settings';
import { actions } from './duck/reducer';

export const GameSettings: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const changePercent = (value: number) => {
    dispatch(actions.percent(value));
  };
  const changeFieldSize = (value: string) => {
    dispatch(actions.field(parseInt(value, 10)));
  };

  const changeCellSize = (value: string) => {
    dispatch(actions.cell(parseInt(value, 10)));
  };

  const changeSpeed = (value: string) => {
    dispatch(actions.startSpeed(parseFloat(value)));
  };

  const onSubmit = () => {
    history.push('/game');
  };

  return (
    <div>
      <Settings
        onSubmit={onSubmit}
        field={{
          labelName: 'Field size',
          formValue: (value: string) => `${value} x ${value}`,
          onValueChange: changeFieldSize,
          min: 10,
          max: 100,
        }}
        cell={{
          labelName: 'Cell size',
          formValue: (value: string) => `${value} x ${value}`,
          onValueChange: changeCellSize,
          min: 5,
          max: 25,
        }}
        speed={{
          labelName: 'Start speed',
          formValue: (value: string) => `x${value}`,
          onValueChange: changeSpeed,
          min: 0.1,
          max: 5,
          step: 0.1,
        }}
        percent={{
          onValueChange: changePercent,
        }}
      />
    </div>
  );
};
