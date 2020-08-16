import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import obelisk from 'obelisk.js';
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
      const point = new obelisk.Point(fieldSize * cellSize, cellSize);
      const pixelView = new obelisk.PixelView(canvas, point);
      const dimension = new obelisk.CubeDimension(cellSize, cellSize, cellSize);
      const gray = obelisk.ColorPattern.GRASS_GREEN;
      const color = new obelisk.CubeColor().getByHorizontalColor(gray);

      const cube = new obelisk.Cube(dimension, color, true);
      const p = new obelisk.Point3D(0, 0, 0);
      pixelView.renderObject(cube, p);
      const post = fieldSize * cellSize - cellSize;
      const p2 = new obelisk.Point3D(post, post, 0);
      pixelView.renderObject(cube, p2);
    }
  }, []);

  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};
