export default class Calculator {
  static sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0);
  }

  static multiply(...numbers: number[]) {
    return numbers.reduce((total, number) => total * number, 1);
  }
}
