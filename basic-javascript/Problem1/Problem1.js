/**
 * Create a function that takes a Date object as a parameter and returns 
 * true if the year of the provided date is a leap year in the Gregorian 
 * calendar.
 */

const leapYear = function (aDate) {
    if (!(aDate instanceof Date)) {
        throw new TypeError();
    }
    let boolLeapYear = false;
    year = aDate.getFullYear();
    if ((year % 4 == 0) && (!(year % 100 == 0) || (year % 400 == 0))) {
        boolLeapYear = true;
    }
    return boolLeapYear;
 }

module.exports = {
    leapYear
};

// let mydate = "spaghetti";
// console.log(leapYear(mydate));

// let testDate = new Date("October 1, 2004 22:02:05");
// console.log(leapYear(testDate));

