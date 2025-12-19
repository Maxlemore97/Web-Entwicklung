function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function power(b, n) {
  if (typeof b === "bigint" && typeof n === "bigint") {
    assert(n >= 0n, "Exponent must be non-negative");

    if (n === 0n) return 1n;

    if (n % 2n === 0n) {
      const half = power(b, n / 2n);
      return half * half;
    } else {
      return b * power(b, n - 1n);
    }
  }

  assert(typeof b === "number", "Base must be a number");
  assert(typeof n === "number", "Exponent must be a number");
  assert(Number.isInteger(n), "Exponent must be an integer");
  assert(n >= 0, "Exponent must be non-negative");

  if (n === 0) return 1;

  if (n % 2 === 0) {
    const half = power(b, n / 2);
    return half * half;
  } else {
    return b * power(b, n - 1);
  }
}

console.log(`the value for 3 is %d`, power(3, 3));        // 27
console.log(`the value for 3n is %d`, power(3n, 3n));        // 27n

// power(3, 3.5);      // AssertionError
// power(3, -3);       // AssertionError

console.log(`the value for 123456789012345678901234567890n and 2n is %d`, power(123456789012345678901234567890n, 2n));        // 15241578753238836750495351562536198787501905199875019052100n

module.exports = { power }
