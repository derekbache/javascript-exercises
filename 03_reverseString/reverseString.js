const reverseString = function (string) {
  let reversedString = "";
  if (string) {
    stringArray = string.split("");
    for (i = stringArray.length; i > 0; i--) {
      reversedString += stringArray[i - 1];
    }
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
