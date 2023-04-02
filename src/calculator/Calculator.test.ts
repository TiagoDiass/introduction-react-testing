import Calculator from './Calculator';

describe('Calculator', () => {
  it('should sum correctly', () => {
    expect(Calculator.sum(3, 7)).toBe(10);
  });

  it.todo('should subtract correctly');
  it.todo('should multiply correctly');
  it.todo('should divide correctly');
});
