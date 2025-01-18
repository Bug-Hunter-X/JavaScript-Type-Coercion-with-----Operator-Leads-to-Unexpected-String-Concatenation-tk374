function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Both inputs must be numbers.');
    return NaN; // Or throw an error
  }
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Both inputs must be numbers.
NaN