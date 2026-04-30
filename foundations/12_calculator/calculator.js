const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((t, n) => t + n, 0);

const multiply = (arr) => arr.reduce((t, n) => t * n, 1);

const power = (a, b) => a ** b;

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};