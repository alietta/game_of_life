import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Settings } from '@/components/Settings';
import history from '@/rdx/history';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { actions } from './duck/reducer';

export const GameSettings: FC = () => {
  const dispatch = useDispatch();
  const [maxField, setMaxField] = useState(20);
  const cellSize = useStoreSelector(state => state.settings.cellSize);
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

  useEffect(() => {
    setMaxField(Math.floor(900 / cellSize));
  }, [cellSize]);

  return (
    <div>
      <Settings
        onSubmit={onSubmit}
        field={{
          labelName: 'Field size',
          formValue: (value: string) => `${value} x ${value}`,
          onValueChange: changeFieldSize,
          min: 4,
          max: maxField,
          step: 2,
        }}
        cell={{
          labelName: 'Cell size',
          formValue: (value: string) => `${value} x ${value}`,
          onValueChange: changeCellSize,
          min: 10,
          max: 50,
          step: 2,
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
