const convertToCelsius = function(Fdegree) {
  let conversion = (Fdegree - 32)*(5/9);
  conversion = parseFloat(conversion.toFixed(1));
  return conversion;
};

const convertToFahrenheit = function(Cdegree) {
  let conversion = (Cdegree*(9/5) + 32);
  conversion = parseFloat(conversion.toFixed(1));
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
