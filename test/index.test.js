const t = require('../dist/main');

let voidList = [undefined, null],
    emptyStrList = ['', ' ', '\n', '\r\n'],
    mobileList = ['13211122233'];

describe('isVoid', () => {
  voidList.forEach(v => {
    test(`${v}`, () => expect(t.isVoid(v)).toBe(true));
  }); 
});

describe('isEmptyString', () => {
  let blackList = ['0'];

  blackList.forEach(v => {
    test(`${v}`, () => expect(t.isEmptyString(v)).toBe(false));
  });

  emptyStrList.forEach(v => {
    test(`${v}`, () => expect(t.isEmptyString(v)).toBe(true));
  });
});

describe('isMobile', () => {
  mobileList.forEach(v => test(`isMobile: ${v}`, () => { expect(t.isMobile(v)).toBe(true); }));

  emptyStrList.forEach(v => test(`isMobile: ${v}`, () => { expect(t.isMobile(v)).toBe(false); }));
});