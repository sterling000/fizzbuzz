const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('When passed a multiple of 3, expect a result of fizz', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });
  
  it('When passed a multiple of 5, expect a result of buzz', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });
  
  it('When passed a multiple of 3 and 5, expect a result of fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });

  it('When passed a value not a multiple of 3 or 5, expect the same value', () => {
    expect(fizzbuzz(1)).toBe("1");
    expect(fizzbuzz(3)).toBe("2");
  });
});