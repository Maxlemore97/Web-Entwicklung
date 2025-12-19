function hasDeepStructure(obj) {
  return Object.values(obj).some(
    v => typeof v === 'object' && v !== null
  );
}

function equal(a, b) {
  // 1. Strikte Gleichheit
  if (a === b) {
    return true;
  }

  // 2. Beide müssen Objekte sein (null ausschließen)
  if (
    typeof a !== 'object' || a === null ||
    typeof b !== 'object' || b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // 4. Flacher Vergleich
  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    typeof a !== 'object' || a === null ||
    typeof b !== 'object' || b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(equal(16, 16)); // true
console.log(equal("hi", "hi")); // true

console.log(equal({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(equal({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 })); // false

console.log(equal({}, {})); // true
console.log(equal({ a: {} }, { a: {} })); // false

let emptyObj = {};
console.log(equal({ a: emptyObj }, { a: emptyObj })); // true

console.log(equal([1, 2], [1, 2])); // true
console.log(equal([1, 2], [2, 1])); // false

console.log(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })); // true
console.log(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })); // false
console.log(deepEqual([1, [2, 3]], [1, [2, 3]])); // true

module.exports = { equal, deepEqual }
