import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { actions } from './duck/reducer';
import { FieldWrapper } from './FieldStyles';
import { makeField, randomByPercent, getGeneration } from './helper';
import { canvasSettings, getDrawData, DrawData, drawCells } from './canvasFunctions';

export const Field: FunctionComponent = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawData, setDrawData] = useState<DrawData>();
  const { fieldSize, cellSize, percent } = useStoreSelector(
    state => state.settings
  );
  const { current: speed } = useStoreSelector(state => state.speed);
  const { cells, active } = useStoreSelector(state => state.field);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvasSettings(canvas, 1000);
      setDrawData(getDrawData(canvas, cellSize));
    }
  }, []);

  useEffect(() => {
    if (drawData) {
      drawCells(cells, cellSize, drawData);
    }
  }, [cells, cellSize, fieldSize]);

  useEffect(() => {
    const newActive = randomByPercent(fieldSize, fieldSize, percent);
    dispatch(actions.setActive(newActive));
  }, [percent, fieldSize]);

  useEffect(() => {
    const newField = makeField(fieldSize, fieldSize, active, cells);
    dispatch(actions.setField(newField));
  }, [active]);

  useEffect(() => {
    let interval: any = null;
    if (speed > 0) {
      interval = setInterval(() => {
        const generation = getGeneration(cells);
        dispatch(actions.setField(generation));
      }, 1000 * 1 / speed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [speed, cells]);

  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};
