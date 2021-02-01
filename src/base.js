const EMPTY = /^\s*$/,
      INTEGER = /^[+-]?\d+$/,
      POSITIVE_INTEGER = /^[1-9]\d*$/,
      MAX_SAFE_INTEGER = Math.pow(2, 53) - 1,
      MIN_SAFE_INTEGER = - MAX_SAFE_INTEGER,
      MOBILE = /^[1-9]\d{10}$/;

function isObject(v) {
  return typeof v === 'object' && v ? true : false;
}

function isPrimitive(v) {
  return !isObject(v);
}

function isDefined(v) {
  return v !== undefined;
}

function isVoid(v) {
  return v == null;
}

function isExist(v) {
  return v != null;
}

function isEmptyString(v) {
  return EMPTY.test(v);
}

function isEmpty(v) {
  return isVoid(v) || isEmptyString(v);
}

// math
function isFinite(v, isStrict) {
  if(isStrict && typeof v !== 'number') return false;

  return v !== Infinity && v !== -Infinity && v === v;
}

function isInt(v, isStrict) {
  if(isStrict && typeof v !== 'number') return false;

  return INTEGER.test(v);
}

function isPositive(v, isStrict) {
  if(isStrict && typeof v !== 'number') return false;

  return v > 0;
}

function isNegative(v, isStrict) {
  if(isStrict && typeof v !== 'number') return false;

  return v < 0;
}

function isNonNegative(v, isStrict) {
  if(isStrict && typeof v !== 'number') return false;

  return v >= 0;
}

function isFPositive(v) {
  v = Number(v);

  return v > 0 && isFinite(v);
}

function isPositiveInt(v) {
  return POSITIVE_INTEGER.test(v);
}

function isNonNegativeInt(v) {
  return isInt(v) && v >= 0;
}

function isSafeInt(v) {
  return isInt(v) && v <= MAX_SAFE_INTEGER;
}

function isSafePositiveInt (v) {
  return isPositiveInt(v) && v <= MAX_SAFE_INTEGER;
}

function isLength (v) {
  return isNonNegativeInt(v) && v <= MAX_SAFE_INTEGER;
}

function isMobile(v) {
  return MOBILE.test(v);
}

module.exports = {
  isObject,
  isPrimitive,
  isDefined,
  isVoid,
  isExist,

  isEmptyString,
  isEmpty,

  isFinite,
  isInt,
  isInteger: isInt,
  isPositive,
  isNegative,
  isNonNegative,
  isFPositive,
  isPositiveInt,
  isNonNegativeInt,
  isSafeInt,
  isSafePositiveInt,
  isLength,

  isMobile,
}