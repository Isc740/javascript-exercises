const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
};

const multiply = function (arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = function (n1, n2) {
  return Math.pow(n1, n2);
};

const factorial = function (n) {
  if (n === 0) return 1;
  result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
