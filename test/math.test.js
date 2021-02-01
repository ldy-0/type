const t = require('../dist/main');

let NonNumberList = [null, '1'],
    NonFinite = [Infinity, -Infinity, NaN],
    NonIntList = [0.1],
    safePostiveIntList = [1, 10000],
    safeNegativeIntList = [-1, -10000],
    intList = [0, 10];

describe('math', () => {
  NonFinite.forEach(v => {
    test(`isFinite: ${v}`, () => expect(t.isFinite(v)).toBe(false));
    test(`isInt: ${v}`, () => expect(t.isInt(v)).toBe(false));
    test(`isPositiveInt: ${v}`, () => expect(t.isPositiveInt(v)).toBe(false));
  });

  describe('isInt', () => {
    NonIntList.forEach(v => { test(`${v}`, () => expect(t.isInt(v)).toBe(false)); });

    intList.forEach(v => {
      test(`${v}`, () => expect(t.isInt(v)).toBe(true));
    });
  });

  safePostiveIntList.forEach(v => {
    test(`isPositiveInt: ${v}`, () => expect(t.isPositiveInt(v)).toBe(true));
    test(`isNonNegativeInt: ${v}`, () => expect(t.isNonNegativeInt(v)).toBe(true));
  });

  safeNegativeIntList.forEach(v => {
    test(`isPositiveInt: ${v}`, () => expect(t.isPositiveInt(v)).toBe(false));
    test(`isNonNegativeInt: ${v}`, () => expect(t.isNonNegativeInt(v)).toBe(false));
  });
});

describe('strict', () => {
  NonNumberList.forEach(v => {
    test(`${v}`, () => expect(t.isFinite(v, true)).toBe(false));
    test(`${v}`, () => expect(t.isInt(v, true)).toBe(false));
  }); 
});

describe('isSafePositiveInt', () => {
  let blackList = [0, 0.1, -1, 2 ** 53, Infinity, NaN],
      whiteList = [10, 2 ** 53 - 1];

  blackList.forEach(v => {
    test(`${v}`, () => expect(t.isSafePositiveInt(v)).toBe(false));
  });

  whiteList.forEach(v => {
    test(`${v}`, () => expect(t.isSafePositiveInt(v)).toBe(true));
  });
});