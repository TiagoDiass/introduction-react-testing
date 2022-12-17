import Calculator from './Calculator';

describe('Calculator', () => {
  it('should sum correctly', () => {
    expect(Calculator.sum(3, 7)).toBe(10);
  });

  it('should multiply correctly', () => {
    expect(Calculator.multiply(2, 10)).toBe(20);
  });
});
