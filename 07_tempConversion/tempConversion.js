const ROUNDING = 10;
const convertToCelsius = function (fah) {
  return Math.round((fah - 32) * 5 / 9 * ROUNDING) / ROUNDING;
};

const convertToFahrenheit = function (cel) {
  return Math.round((cel * 9 / 5 + 32) * ROUNDING) / ROUNDING;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
