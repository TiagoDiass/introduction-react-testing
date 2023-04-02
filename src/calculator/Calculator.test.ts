import Calculator from './Calculator';

describe('Calculator', () => {
  it('should sum correctly', () => {
    expect(Calculator.sum(3, 7)).toBe(10);
  });

  it('should subtract correctly', () => {
    expect(Calculator.subtract(10, 7)).toBe(3);
  });

  it('should multiply correctly', () => {
    expect(Calculator.multiply(2, 10)).toBe(20);
  });

  it('should divide correctly', () => {
    expect(Calculator.divide(10, 5)).toBe(2);
  });
});
