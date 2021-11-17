const assert = require('assert');

const calculator = require('../src/count');

describe('计算器 test', () => {
  it('加法 test', async () => {
    const res = calculator.plus(1, 2);
    assert.equal(res, 3, '结果不正确');
  });
});