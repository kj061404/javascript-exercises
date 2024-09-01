const palindromes = function (string) {
  string = string.toLowerCase()
  string = string.replace(/[^a-zA-Z0-9]/g, '')
  let newString = string.split('')
  newString = newString.reverse()
  newString = newString.join('')

  if (newString === string) {
    return true;
  }
  else {
    return false;
  } 

};

// Do not edit below this line
module.exports = palindromes;
