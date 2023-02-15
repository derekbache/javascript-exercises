const sumAll = function (firstInt, secondInt) {
  let summedNums = 0;
  let startInt = firstInt;
  let endInt = secondInt;
  if (firstInt < 0 || secondInt < 0) {
    summedNums = "ERROR";
  } else if (!(typeof firstInt == "number" && typeof secondInt == "number")) {
    summedNums = "ERROR";
  } else {
    if (firstInt > secondInt) {
      startInt = secondInt;
      endInt = firstInt;
    }
    for (i = startInt; i < endInt + 1; i++) {
      summedNums += i;
    }
  }

  return summedNums;
};

// Do not edit below this line
module.exports = sumAll;
