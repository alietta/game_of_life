import { uniq } from 'ramda';
import {
  randomByPercent,
  makeFieldPos,
  randomIntWithoutRepeat,
} from './helper';

describe('Helper functions', () => {
  describe('randomIntWithoutRepeat', () => {
    it('test randomIntWithoutRepeat', () => {
      expect(randomIntWithoutRepeat(3, [2, 3, 0])).toEqual(1);
    });
  });
  describe('makeFieldPos', () => {
    it('test makeFieldPos', () => {
      expect(makeFieldPos({ cell: 7, width: 3 })).toEqual({ x: 1, y: 2 });
    });
    it('test makeFieldPos', () => {
      expect(makeFieldPos({ cell: 8, width: 3 })).toEqual({ x: 2, y: 2 });
    });
  });
  describe('randomByPercent', () => {
    it('test randomByPercent 50', () => {
      const randArray = randomByPercent(4, 4, 50);
      expect(randArray.length).toEqual(8);
      expect(uniq(randArray)).toEqual(randArray);
    });
    it('test randomByPercent 25', () => {
      const randArray = randomByPercent(4, 4, 25);
      expect(randArray.length).toEqual(4);
      expect(uniq(randArray)).toEqual(randArray);
    });
  });
});
