const reverseString = function(string) {
  const length = string.length;
  let reversedString = '';
  let counter = 0;
  while (counter < length) {
    reversedString = reversedString + string.slice(-1);
    string = string.slice(0, -1);
    counter++;
  }
  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
