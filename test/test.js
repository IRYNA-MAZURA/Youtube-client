const assert = require('assert');

Object.freeze(assert);
const getCurrentVideoCount = require('./currentVideoCount');
const outputNumberOfPage = require('./numberOfPage');


describe('getCurrentVideoCount', () => {
  it('1', () => {
    assert.deepEqual(getCurrentVideoCount(480), 1);
  });
  it('2', () => {
    assert.deepEqual(getCurrentVideoCount(1400), 4);
  });
});


describe('outputNumberOfPage', () => {
  it('1', () => {
    assert.deepEqual(outputNumberOfPage(4, 17, 30), 2);
  });
  it('2', () => {
    assert.deepEqual(outputNumberOfPage(3, 0, 30), 1);
  });
});
