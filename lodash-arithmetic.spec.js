var expect = require('chai').expect;
var _ = require('lodash');
var lodashArithmetic = require('./lodash-arithmetic.js');

_.mixin(lodashArithmetic);

describe('Lodash-arithmetic mixins', function() {

  describe('Add two numbers with good floating point precision', function () {
    it('should not add with good precision', function () {
      expect(0.1 + 0.2).not.to.equal(0.3);
    });

    it('should add with good precision', function () {
      expect(_.add(0.1, 0.2)).to.equal(0.3);
    });
  });

  describe('Subtract two numbers with good floating point precision', function () {
    it('should not subtract with good precision', function () {
      expect(0.1234 - 0.1235).not.to.equal(-0.0001);
      expect(0.1235 - 0.1234).not.to.equal(0.0001);
    });

    it('should subtract with good precision', function () {
      expect(_.subtract(0.1234, 0.1235)).to.equal(-0.0001);
      expect(_.subtract(0.1235, 0.1234)).to.equal(0.0001);
    });
  });

  describe('Multiply two numbers with good floating point precision', function () {
    it('should not multiply with good precision', function () {
      expect(0.1 * 0.2).not.to.equal(0.02);
    });

    it('should multiply with good precision', function () {
      expect(_.multiply(0.1, 0.2)).to.equal(0.02);
    });

    it('should multiply with good precision', function () {
      expect(_.multiply(0.07, 100)).to.equal(7);
      expect(_.multiply(0.00917, 1000)).to.equal(9.17);
    });

    it('should not multiply with good precision', function () {
      expect(77.1 * 850).not.to.equal(65535);
      expect(850 * 77.1).not.to.equal(65535);
    });

    it('should multiply with good precision', function () {
      expect(_.multiply(77.1, 850)).to.equal(65535);
      expect(_.multiply(850, 77.1)).to.equal(65535);
    });
  });

  describe('Divide two numbers with good floating point precision', function () {
    it('should not divide with good precision', function () {
      expect(8.2 / 1000).not.to.equal(0.0082);
    });

    it('should divide with good precision', function () {
      expect(_.divide(8.2, 1000)).to.equal(0.0082);
    });
  });

  describe('Make complex operations with Lodash chains', function () {
    var result = _(0.1)
      .add(0.2)
      .multiply(77.1)
      .subtract(0.12345)
      .value();
    expect(result).to.equal(23.00655);
  });

});
