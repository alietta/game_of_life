import obelisk from 'obelisk.js';

export const canvasSettings = (canvasElement: HTMLCanvasElement, width: number) => {
  const canvas = canvasElement;
  canvas.width = width * 2;
  canvas.height = width * 2;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${width}px`;
};

export interface DrawData {
  view: obelisk.PixelView;
  cubes: {
    green: obelisk.Cube;
    blue: obelisk.Cube;
    purple: obelisk.Cube;
  };
}

export const getDrawData = (
  canvas: HTMLCanvasElement,
  size: number
): DrawData => {
  const point = new obelisk.Point(1000, 50);
  const pixelView = new obelisk.PixelView(canvas, point);
  const dimension = new obelisk.CubeDimension(size, size, size);
  const green = new obelisk.CubeColor().getByHorizontalColor(
    obelisk.ColorPattern.GRASS_GREEN
  );
  const blue = new obelisk.CubeColor().getByHorizontalColor(
    obelisk.ColorPattern.BLUE
  );
  const purple = new obelisk.CubeColor().getByHorizontalColor(
    obelisk.ColorPattern.PURPLE
  );
  const greenCube = new obelisk.Cube(dimension, green, true);
  const blueCube = new obelisk.Cube(dimension, blue, true);
  const purpleCube = new obelisk.Cube(dimension, purple, true);
  return {
    view: pixelView,
    cubes: {
      green: greenCube,
      blue: blueCube,
      purple: purpleCube,
    },
  };
};

export const drawCells = (cells: number[][], size: number, drawData: DrawData) => {
  const { view, cubes: { green, blue, purple } } = drawData;
  view.clear();
  cells.forEach((items: number[], y: number) => {
    items.forEach((item, x: number) => {
      if (item > 0) {
        const bigCube = item > 3 && item < 6 ? blue : purple;
        const cube = item < 4 ? green : bigCube;
        const p = new obelisk.Point3D(size * x, size * y, 0);
        view.renderObject(cube, p);
      }
    });
  });
};
