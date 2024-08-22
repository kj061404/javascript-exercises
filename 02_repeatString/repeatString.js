const repeatString = function(string, num) {
  let counter = 0;
  string = string;
  let newString = '';

  if (num < 0) {
    return 'ERROR';
  }
  
  while (counter < num) {

    newString = newString + string;
    counter++;
  }

  return newString;

};

// Do not edit below this line
module.exports = repeatString;
 