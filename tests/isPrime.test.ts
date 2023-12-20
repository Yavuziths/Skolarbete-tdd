import { isPrime } from '../src/isPrime';

describe('isPrime', () => {
  it('should return true for prime number', () => {
    expect(isPrime(5)).toBe(true);
  });

  it('should return false for non-prime number', () => {
    expect(isPrime(4)).toBe(false);
  });
});
