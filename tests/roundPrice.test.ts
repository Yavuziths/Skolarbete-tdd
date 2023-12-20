import { roundPrice } from '../src/roundPrice';

describe('roundPrice', () => {
  it('should format price in SEK by default', () => {
    expect(roundPrice(232.10542)).toBe('232.11 SEK');
  });

  it('should format price with custom format', () => {
    expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
  });
});
