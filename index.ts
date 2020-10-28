
export const splitArrayEqually = (input: Array<any>, divisor: number): Array<Array<any>> => {
  
  // sanitise arguments
  if (divisor === 0) throw 'Divisor cannot be zero!';
  if (divisor < 0) throw 'Divisor cannot be negative!';
  if (input.length <= 1) throw 'Input array cannot be empty!';

  // init return value
  let result: Array<Array<any>> = [];

  // for 0..divisor splice from start of array to upper limit
  // this destroys the input array
  for (let i: number = divisor; i > 0; i--)
    result.push(input.splice(0, Math.ceil(input.length / i)));

  // filter any empty arrays from end of result - from divisor > length of input
  result = result.filter((value: Array<any>) => value.length > 0);

  return result;
};
