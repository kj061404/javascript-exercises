const convertToCelsius = function(temp) {
  let ans = (temp - 32) * (5/9);
  if (Number.isInteger(ans) === true) {
    ans = Math.round(ans);
  }
  else if (Number.isInteger(ans) === false) {
    ans = ans.toFixed(1);
  }
  return Number(ans);
};

const convertToFahrenheit = function(temp) {
  let ans = (temp * (9/5)) + 32;
  if (Number.isInteger(ans) === true) {
    ans = Math.round(ans);
  }
  else if (Number.isInteger(ans) === false) {
    ans = ans.toFixed(1);
  }
  return Number(ans);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
