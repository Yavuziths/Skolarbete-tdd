import { getGenitive } from '../src/getGenitive';

describe('getGenitive', () => {
  it('should form the genitive of a name', () => {
    expect(getGenitive('Jonatan')).toBe('Jonatans');
    expect(getGenitive('Claes')).toBe('Claes\'');
  });
});
