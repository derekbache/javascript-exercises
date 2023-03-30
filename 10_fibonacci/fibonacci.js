const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  let array = [1, 1];
  var lastElement = array[array.length - 1];
  for (i = 2; i <= number; i++) {
    lastElement = array[array.length - 1];
    let secondLastElement = array[array.length - 2];
    array.push(lastElement + secondLastElement);
  }
  return lastElement;
};

// Do not edit below this line
module.exports = fibonacci;
