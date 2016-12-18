(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['lodash'], factory);
  }
  else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('lodash').runInContext());
  }
  else {
    // Browser globals (root is window)
    root._.mixin(factory(root._));
  }
}(this, function (_, undefined) {
  'use strict';

  function add(a, b) {
    var fa = getFactor(a);
    var fb = getFactor(b);
    var ia = toInt(a);
    var ib = toInt(b);
    return (ia * fb + ib * fa) / (fa * fb);
  }

  function subtract(a, b) {
    var fa = getFactor(a);
    var fb = getFactor(b);
    var ia = toInt(a);
    var ib = toInt(b);
    return (ia * fb - ib * fa) / (fa * fb);
  }

  function multiply(a, b) {
    var fa = getFactor(a);
    var fb = getFactor(b);
    var ia = toInt(a);
    var ib = toInt(b);
    return (ia * ib) / (fa * fb);
  }

  function divide(a, b) {
    var fa = getFactor(a);
    var fb = getFactor(b);
    var ia = toInt(a);
    var ib = toInt(b);
    return (ia * fb) / (ib * fa);
  }

  // Return the number needed to convert a floating number to an integer
  function getFactor(str) {
    try {
      return Math.pow(10, /[.](\d*)/.exec(String(str))[1].length)
    } catch (e) {
      return 1;
    }
  }

  function toInt(str) {
    return Number(String(str).replace('.', ''));
  }

  var mixins = {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply
  };

  _.mixin(mixins);

  return mixins;
}));
