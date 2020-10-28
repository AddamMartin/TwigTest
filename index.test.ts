import { splitArrayEqually } from ".";

test('Works as expected when the input array length is divisible by the remainder', () => {
  let result: Array<Array<number>> = splitArrayEqually([1,2,3,4,5,6], 3);
  expect(result).toStrictEqual([[1,2], [3,4], [5,6]]);
});

test('Works as expected when the input array length is not divisible by the remainder', () => {
  let result: Array<Array<number>> = splitArrayEqually([1,2,3,4,5], 3);
  expect(result).toStrictEqual([[1,2], [3,4], [5]]);
});

test('Works as expected when the divisor is greater than the input array length', () => {
  let result: Array<Array<number>> = splitArrayEqually([1,2,3,4,5,6], 8);
  expect(result).toStrictEqual([[1], [2], [3], [4], [5], [6]]);
});

test('Works as expected when the divisor is zero', () => {
  try {
    expect(splitArrayEqually([1,2,3,4,5,6], 0)).toThrowError();
  } catch(e) {
    expect(e).toBe('Divisor cannot be zero!');
  }
});

test('Works as expected when the divisor is negative', () => {
  try {
    expect(splitArrayEqually([1,2,3,4,5,6], -3)).toThrowError();
  } catch(e) {
    expect(e).toBe('Divisor cannot be negative!');
  }
});

test('Works as expected when the input array is empty', () => {
  try {
    expect(splitArrayEqually([], 3)).toThrowError();
  } catch(e) {
    expect(e).toBe('Input array cannot be empty!');
  }
});
