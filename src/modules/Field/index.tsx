import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { FieldWrapper } from './FieldStyles';

export const Field: FunctionComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const { fieldSize, cellSize } = useStoreSelector(state => state.settings);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const width = fieldSize * cellSize;
      canvas.width = width * 2;
      canvas.height = width * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${width}px`;
      if (ctxRef && ctxRef.current) {
        ctxRef.current.scale(2, 2);
      }
    }
  }, [fieldSize, cellSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      ctxRef.current = context;
    }
  }, []);


  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};
