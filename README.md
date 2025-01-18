# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion with the '+' operator.  The bug arises from JavaScript's loose typing and automatic type conversion, which can lead to unexpected string concatenation instead of arithmetic addition.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a solution using explicit type checking and conversion.

## Bug Description
When adding a number and a string using the '+' operator, JavaScript automatically converts the number to a string before concatenation. This behavior is often unexpected and can lead to errors in calculations.

## Solution
The solution employs strict equality (`===`) checks and explicit type conversion to ensure that both operands are numbers before performing addition.

## How to reproduce
1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment.
3. Observe the unexpected output.
4. Open `bugSolution.js` and run it to see the correct result.