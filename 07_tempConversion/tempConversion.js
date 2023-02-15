const convertToCelsius = function (tempFahrenheit) {
  let temp = (tempFahrenheit - 32) * (5 / 9);
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function (tempCelcius) {
  let temp = tempCelcius * (9 / 5) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
