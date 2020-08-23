import 'jest-canvas-mock';

import { canvasSettings, getDrawData, drawCells } from './canvasFunctions';

describe('Canvas Helper', () => {
  let ctx: CanvasRenderingContext2D;
  beforeEach(() => {
    ctx = new window.CanvasRenderingContext2D();
    // eslint-disable-next-line
    ctx._canvas = {
      width: 100,
      height: 100,
      getContext: () => ctx,
      style: {
        width: 0,
      },
    };
  });
    it('canvasSettings', () => {
      canvasSettings(ctx.canvas, 1000);
      expect(ctx.canvas.width).toEqual(2000);
      expect(ctx.canvas.height).toEqual(2000);
      expect(ctx.canvas.style.width).toEqual('100%');
    });
    it('getDrawData', () => {
      canvasSettings(ctx.canvas, 1000);
      const data = getDrawData(ctx.canvas, 10);
      // eslint-disable-next-line
      expect(ctx.__getEvents()).toMatchInlineSnapshot(`
        Array [
          Object {
            "props": Object {
              "value": false,
            },
            "transform": Array [
              1,
              0,
              0,
              1,
              0,
              0,
            ],
            "type": "imageSmoothingEnabled",
          },
        ]
      `);
      expect(data).toMatchSnapshot();
    });
    it('drawCells', () => {
      const cellSize = 10;
      canvasSettings(ctx.canvas, 1000);
      const data = getDrawData(ctx.canvas, cellSize);
      const cells = [[0, 0, 1], [0, 4, 5], [7, 0, 8]];
      drawCells(cells, cellSize, data);
      // eslint-disable-next-line
      expect(ctx.__getEvents()).toMatchSnapshot();
    });
});
