const findTheOldest = function (people) {
  const oldest = people.reduce((oldestPerson, currentPerson) => {
    if (!("yearOfDeath" in currentPerson)) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }
    if (!("yearOfDeath" in oldestPerson)) {
      oldestPerson.yearOfDeath = new Date().getFullYear();
    }

    let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    if (currentAge > oldestAge) {
      oldestPerson = currentPerson;
    }
    return oldestPerson;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
