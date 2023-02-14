const removeFromArray = function (array, ...toRemove) {
  for (i = 0; i < toRemove.length; i++) {
    if (array.indexOf(toRemove[i]) < 0) {
      continue;
    } else {
      array.splice(array.indexOf(toRemove[i]), 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
