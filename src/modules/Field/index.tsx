import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import obelisk from 'obelisk.js';
import { actions } from './duck/reducer';
import { FieldWrapper } from './FieldStyles';
import { makeField } from './helper';

interface Props {
  presentation?: boolean;
}
export const Field: FunctionComponent<Props> = props => {
  const { presentation = false } = props;
  const dispatch = useDispatch();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const viewRef = useRef<obelisk.PixelView | null>(null);
  const { fieldSize, cellSize } = useStoreSelector(state => state.settings);
  const { cells, active } = useStoreSelector(state => state.field);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const width = 1000;
      canvas.width = width * 2;
      canvas.height = width * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${width}px`;
      if (ctxRef && ctxRef.current) {
        ctxRef.current.scale(2, 2);
      }
      /* if (viewRef.current) { */
      /*   viewRef.current.clear(); */
      /*   const dimension = new obelisk.CubeDimension( */
      /*     cellSize, */
      /*     cellSize, */
      /*     cellSize */
      /*   ); */
      /*   const gray = obelisk.ColorPattern.GRASS_GREEN; */
      /*   const color = new obelisk.CubeColor().getByHorizontalColor(gray); */

      /*   const cube = new obelisk.Cube(dimension, color, true); */
      /*   const p = new obelisk.Point3D(0, 0, 0); */
      /*   viewRef.current.renderObject(cube, p); */
      /*   const post = fieldSize * cellSize - cellSize; */
      /*   const p2 = new obelisk.Point3D(post, post, 0); */
      /*   viewRef.current.renderObject(cube, p2); */
      /* } */
    }
  }, [fieldSize, cellSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      ctxRef.current = context;
      const point = new obelisk.Point(500, 50);
      const pixelView = new obelisk.PixelView(canvas, point);
      viewRef.current = pixelView;
    }
    if (presentation) {
      dispatch(
        actions.setActive([
          0,
          fieldSize - 1,
          fieldSize * fieldSize - 1,
          fieldSize * (fieldSize - 1),
        ])
      );
    }
  }, []);

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.clear();
      const dimension = new obelisk.CubeDimension(cellSize, cellSize, cellSize);
      const gray = obelisk.ColorPattern.GRASS_GREEN;
      const color = new obelisk.CubeColor().getByHorizontalColor(gray);

      cells.forEach((items: number[], y: number) => {
        items.forEach((item, x: number) => {
          if (item > 0) {
            const cube = new obelisk.Cube(dimension, color, true);
            const p = new obelisk.Point3D(cellSize * x, cellSize * y, 0);
            viewRef.current.renderObject(cube, p);
          }
        });
      });
    }
  }, [cells, cellSize]);

  useEffect(() => {
    if (presentation) {
      dispatch(
        actions.setActive([
          0,
          fieldSize - 1,
          fieldSize * fieldSize - 1,
          fieldSize * (fieldSize - 1),
        ])
      );
    }
  }, [fieldSize]);

  useEffect(() => {
    const newField = makeField(fieldSize, fieldSize, active, cells);
    dispatch(actions.setField(newField));
  }, [active]);

  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};
