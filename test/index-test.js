const assert = require('assert');
const Calculate = require('../index.js');
const { describe, it } = require('mocha');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('tests if the output of 5! is equal to 120', () => {
            //Setup
            const inputNum = 5
            const expected = 120;
            //Exercise
            const result = Calculate.factorial(inputNum)
            //Verify
            assert.strictEqual(result, expected);
          })
          it('tests if the output of 3! is equal to 6', () => {
            //Setup
            const inputNum = 3
            const expected = 6;
            //Exercise
            const result = Calculate.factorial(inputNum)
            //Verify
            assert.strictEqual(result, expected);
          })
          it('returns 1 if the number passed is a 0', () => {
            //Setup
            const expected = 1;
            //Exercise
            const result = Calculate.factorial(0)
            //Verify
            assert.equal(result, expected);
          })
    })
});