export const randomIntWithoutRepeat = (
  max: number,
  arr: Array<number>
): number => {
  const rand = Math.floor(Math.random() * Math.floor(max));
  if (arr.includes(rand)) {
    return randomIntWithoutRepeat(max, arr);
  }
  return rand;
};

export const makeFieldPos = (data: {
  cell: number;
  width: number;
}): { x: number; y: number } => {
  const { cell, width } = data;
  const line = Math.trunc(cell / width);
  return {
    y: line,
    x: cell - line * width,
  };
};

export const randomByPercent = (
  x: number,
  y: number,
  percent: number
): number[] => {
  const volume = x * y;
  const filled: number[] = [];
  const percentCount = Math.round((percent * volume) / 100);
  while (filled.length !== percentCount) {
    const cell = randomIntWithoutRepeat(volume, filled);
    filled.push(cell);
  }
  return filled;
};

export const makeField = (
  x: number,
  y: number,
  filled: number[],
  field?: number[][]
): number[][] => {
  const isUpdate = field && field.length === y && field[0].length === x;
  const filledArray = Array(y)
    .fill(false)
    .map(() => Array(x).fill(0));
  filled.forEach(cell => {
    const pos = makeFieldPos({ cell, width: x });
    if (isUpdate && field && field[pos.y][pos.x] > 0) {
      filledArray[pos.y][pos.x] = field[pos.y][pos.x] + 1;
    } else {
      filledArray[pos.y][pos.x] = 1;
    }
  });
  return filledArray;
};
