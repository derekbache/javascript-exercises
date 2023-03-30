const add = function (...array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const subtract = function (...array) {
  let total = array[0];
  for (i = 1; i < array.length; i++) {
    total -= array[i];
  }
  return total;
};

const sum = function (array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (array) {
  let total = array[0];
  for (i = 1; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function (number, power) {
  let total = number ** power;
  return total;
};

const factorial = function (number) {
  let total = 1;
  for (i = number; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
