import { makeHeading } from '../src/makeHeading';

describe('makeHeading', () => {
  it('should create a heading', () => {
    expect(makeHeading('Hello', 1)).toBe('<h1>Hello</h1>');
    expect(makeHeading('Next level', 2)).toBe('<h2>Next level</h2>');
  });
});
