//Lets create a function that takes in a date
function leapYearCheck(date) {
  //.getUTCFullYear -> universal time
  //Condition to test the year to see if it is a leap year.
  //We test the year under the conditions below and see if a remainer exist
  if (
    (date.getUTCFullYear() % 4 == 0 && date.getUTCFullYear() % 100 !== 0) ||
    date.getUTCFullYear() % 400 == 0
  ) {
    return true;
  } else {
    return false;
  }
}

//Exports the functions to the test class
module.exports = {
  leapYearCheck,
};
