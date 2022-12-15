import Calculator from './Calculator';

describe('Calculator', () => {
  it('should sum correctly', () => {
    expect(Calculator.sum(3, 7)).toBe(10);
    expect(Calculator.sum(4, 6, 10)).toBe(20);
  });

  it('should multiply correctly', () => {
    expect(Calculator.multiply(2, 10, 6)).toBe(120);
  });
});
