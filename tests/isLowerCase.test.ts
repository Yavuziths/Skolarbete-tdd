import { isLowerCase } from '../src/isLowerCase';

describe('isLowerCase', () => {
  it('should return true for lowercase string', () => {
    expect(isLowerCase('test')).toBe(true);
  });

  it('should return false for mixed or uppercase string', () => {
    expect(isLowerCase('Test')).toBe(false);
    expect(isLowerCase('TEST')).toBe(false);
  });
});
