import { validateZip } from '../src/validateZip';

describe('validateZip', () => {
  it('should validate correct ZIP code', () => {
    expect(validateZip('12345')).toBe(true);
  });

  it('should reject invalid ZIP code', () => {
    expect(validateZip('1234')).toBe(false);
    expect(validateZip('abcd5')).toBe(false);
  });
});
