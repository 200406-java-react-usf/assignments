/**
 * JavaScript Assignment #1
 * By: Mohamed Aboulela
 * Purpose: Create a function that takes a Date object as a parameter and returns true 
 * if the year of the provided date is a leap year in the Gregorian calendar.
 */

const leapyear = (date) => {

    if (date % 4 == 0 || (date % 100 != 0 && date % 400 == 0)) {
        return true;
    }
    else
        return false;
}

console.log(leapyear(2020));
console.log(leapyear(2016));
console.log(leapyear(2012));
console.log(leapyear(2100));
console.log(leapyear(2200));
console.log(leapyear(2300));

module.exports = 
    leapyear;

