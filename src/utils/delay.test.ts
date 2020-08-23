import { delay } from './delay';

jest.useFakeTimers();

describe('test delay', () => {
  it('delay 100', () => {
    delay(100);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });
  it('delay 500', () => {
    delay(500);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
});
