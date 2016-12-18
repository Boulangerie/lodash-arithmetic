# lodash-arithmetic
[![Build Status](https://img.shields.io/travis/Boulangerie/lodash-arithmetic.svg?style=flat-square)](https://travis-ci.org/Boulangerie/lodash-arithmetic)
[![Coveralls](https://img.shields.io/coveralls/Boulangerie/lodash-arithmetic.svg?branch=master)](https://coveralls.io/github/Boulangerie/lodash-arithmetic)
[![npm version](https://img.shields.io/npm/v/lodash-arithmetic.svg?style=flat-square)](https://www.npmjs.org/package/lodash-arithmetic)
[![npm downloads](https://img.shields.io/npm/dm/lodash-arithmetic.svg?style=flat-square)](http://npm-stat.com/charts.html?package=lodash-arithmetic&from=2016-12-18)
[![npm dependencies](https://img.shields.io/david/Boulangerie/lodash-arithmetic.svg)](https://david-dm.org/Boulangerie/lodash-arithmetic)
[![npm devDependencies](https://img.shields.io/david/dev/Boulangerie/lodash-arithmetic.svg)](https://david-dm.org/Boulangerie/lodash-arithmetic)
[![npm license](https://img.shields.io/npm/l/lodash-arithmetic.svg)](https://www.npmjs.org/package/lodash-arithmetic)

> Lodash mixins for arbitrary-precision arithmetic

## Why Lo-Dash mixins for arithmetic?
Because of binary floating-point, arithmetic operations in JavaScript may imply rounding issues like:
> 0.1 + 0.2 = 0.30000000000000004

You will find a complete explanation about floating-point arithmetic at http://floating-point-gui.de/.

Lodash-arithmetic provides simple Lo-Dash mixins for basic arithmetic operations: addition, subtraction, multiplication and division.
Even if Lo-Dash 4 natively has the methods [_.add](https://lodash.com/docs/4.17.2#add), [_.subtract](https://lodash.com/docs/4.17.2#subtract), [_.multiply](https://lodash.com/docs/4.17.2#multiply) and [_.divide](https://lodash.com/docs/4.17.2#divide), they do not take in account arbitrary-precision decimal.

**Let's see the following examples:**
```js
// Without Lo-Dash
console.log(0.1 + 0.2 === 0.3) // false

// With Lo-Dash 4 but without the arithmetic mixins
console.log(_.add(0.1, 0.2) === 0.3) // false

// With Lo-Dash and the arithmetic mixins
console.log(_.add(0.1, 0.2) === 0.3) // true
```

## Install
The easiest way is to install `lodash-arithmetic` as `dependency`:
```sh
npm install lodash-arithmetic --save
```

## Usage
##### Addition
```js
_.add(0.1, 0.2); // 0.3
```
##### Subtraction
```js
_.subtract(0.1235, 0.1234); // 0.0001
```
##### Multiplication
```js
_.multiply(0.07, 100); // 7
```
##### Division
```js
_.divide(8.2, 1000); // 0.0082
```
##### Chaining
```js
_(0.1)
  .add(0.2)
  .multiply(77.1)
  .subtract(0.12345)
  .value(); // 23.00655
```

## License
Code licensed under [MIT License](LICENSE).
