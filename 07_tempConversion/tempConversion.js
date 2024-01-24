const convertToCelsius = function(tempF) {

  let temprCel = ((tempF-32)*(5/9));
  roundedCel = Math.round(temprCel*10)/10

  return roundedCel;
};

const convertToFahrenheit = function(tempC) {

  let temprFar = (tempC*(9/5)+32);
  roundedFar = Math.round(temprFar*10)/10

  return roundedFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
