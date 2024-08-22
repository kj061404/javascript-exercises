const sumAll = function(num1, num2) {
  if (isNaN(num1)) {
    return 'ERROR';
  }
  else if (isNaN(num2)) {
    return 'ERROR';
  }
  else if (num1 < 0) {
    return 'ERROR';
  }
  else if (num2 < 0) {
    return 'ERROR';
  }
  else if (Number.isInteger(num1) === false) {
    return 'ERROR';
  }
  else if (Number.isInteger(num2) === false) {
    return 'ERROR';
  }

  ans = 0;
  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      ans += i;
  
    }
  }
  else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      ans += i;
  
    }
  }
  return ans;

};

// Do not edit below this line
module.exports = sumAll;
