import { uniq } from 'ramda';
import {
  randomByPercent,
  makeFieldPos,
  randomIntWithoutRepeat,
  makeField,
  checkNeighbor,
  getGeneration
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
  describe('makeField', () => {
    it('test makeField without update', () => {
      const field = makeField(2, 2, [0, 3]);
      expect(field).toEqual([
        [1, 0],
        [0, 1],
      ]);
    });
    it('test makeField with update', () => {
      const field = makeField(
        2,
        2,
        [1, 3],
        [
          [1, 0],
          [0, 1],
        ]
      );
      expect(field).toEqual([
        [0, 1],
        [0, 2],
      ]);
    });
  });
  describe('checkNeighbor', () => {
    let field;
    beforeEach(() => {
      field = [
        [0, 1, 1],
        [1, 1, 0],
        [0, 1, 0],
      ];
    });
    it('checkNeighbor #1', () => {
      const neighbor = checkNeighbor(field, 0, 0);
      expect(neighbor).toEqual(3);
    });
    it('checkNeighbor #2', () => {
      const neighbor = checkNeighbor(field, 1, 1);
      expect(neighbor).toEqual(4);
    });
    it('checkNeighbor #3', () => {
      const neighbor = checkNeighbor(field, 0, 2);
      expect(neighbor).toEqual(3);
    });
  });
  describe('getGeneration', () => {
    it('getGeneration figure 1', () => {
      const arr = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];
      expect(getGeneration(arr)).toEqual([
        [0, 0, 0],
        [1, 2, 1],
        [0, 0, 0],
      ]);
    });
    it('getGeneration figure 2', () => {
      const arr = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ];
      expect(getGeneration(arr)).toEqual([
        [2, 2, 0],
        [2, 2, 0],
        [0, 0, 0],
      ]);
    });
    it('getGeneration figure 3', () => {
      const arr = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 0, 0],
      ];
      expect(getGeneration(arr)).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });
});