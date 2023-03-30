const palindromes = function (string) {
  const parsedString = string.toLowerCase().replace(/\W/g, "").split("");
  const backwardsString = parsedString.slice().reverse();
  if (backwardsString.toString() === parsedString.toString()) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
