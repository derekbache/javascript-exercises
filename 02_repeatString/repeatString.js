const repeatString = function (string, num) {
  let repeatedString;
  if (num == 0) {
    repeatedString = "";
  } else if (num < 0) {
    repeatedString = "ERROR";
  } else {
    repeatedString = string;
    for (i = 1; i < num; i++) {
      repeatedString += string;
    }
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
