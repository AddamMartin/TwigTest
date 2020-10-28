# Twig Test - Split Array Equally

splitArrayEqually is a function implemented in TypeScript. It is used to split an array, of any type, into an array of arrays of equal specified size. If the length of the input array is not divisible by the specified divisor, the final value of the reult will contain only the remainder.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install required dependencies.

```bash
npm i
```

## Usage

splitArrayEqually is exported as a single function. To use it in your code, simply import from wherever this file is located and call the function as shown below.

```bash
import { splitArrayEqually } from ".";

let result = splitArrayEqually(['a', 'b', 'c', 'd'], 2);
```

This will only work if you have Babel (or equivalent) configured for TypeScript. To compile a native JS version, run:

```bash
npx tsc ./index.test.ts
```

## Test

To run the Jest unit test suite, ensure dev dependencies are installed and run the following command.

```bash
npm test
```

## License
None.