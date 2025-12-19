function factorial(n) {
  // Prüfen, ob BigInt oder Number
  const isBigInt = typeof n === 'bigint';

  if (n < (isBigInt ? 0n : 0)) {
    throw new Error('n must be >= 0');
  }

  let result = isBigInt ? 1n : 1;

  for (let i = isBigInt ? 1n : 1; i <= n; i = isBigInt ? i + 1n : i + 1) {
    result *= i;
  }

  return result;
}

console.log(factorial(10));
// → 3628800

console.log(factorial(50n));
// → 30414093201713378043612608166064768844377641568960512000000000000n

module.exports = { factorial };
