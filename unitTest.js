// Task 1: Expanding stringLength with if
const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('invalid string');
  }
  return str.length;
};

// Task 2: Reverse string fx
const reverseString = (str) => str.split('').reverse().join('');

// Task 3: Simple Calculator
class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

    static add = (x, y) => (x + y);

    static subtract = (x, y) => x - y;

    static multiply = (x, y) => x * y;

    static divide = (x, y) => x / y;
}

// Task 4: Captalize string fx
const capitaliseString = (str) => {
  const strA = str.split('')[0].toUpperCase();
  return strA + str.slice(1);
};

module.exports = {
  stringLength, reverseString, Calculator, capitaliseString,
};