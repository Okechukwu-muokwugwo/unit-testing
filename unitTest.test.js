const {
  stringLength, reverseString, Calculator, capitaliseString,
} = require('./unitTest.js');

// Task 1: string length Testing
test('string length', () => {
  expect(stringLength('Okechukwu')).toBe(9);
});
test('throw error if null', () => {
  expect(() => stringLength('')).toThrow(Error);
});
test('throw error if > 10', () => {
  expect(() => stringLength('abcdefghijl')).toThrow(Error);
});

// Task 2: reverseString Tesing
test('should be reverse of string entered', () => {
  expect(reverseString('Adams')).toBe('smadA');
});

// Task 3: Calculator testing
describe('should perform add, divide, subtract', () => {
  test('should add two numbers', () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });
  test('should subtract two numbers', () => {
    expect(Calculator.subtract(2, 3)).toBe(-1);
  });
  test('should multiply two numbers', () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });
});

// Task 4: Capitalise string testing
test('should return first str capitalised', () => {
  expect(capitaliseString('ego')).toBe('Ego');
});