/**
 * Create a function that takes a Date object as a parameter and returns 
 * true if the year of the provided date is a leap year in the Gregorian 
 * calendar.
 */

 function leapYear (year) {
    if ((year % 4 == 0) && (!(year % 100 == 0) || (year % 400 == 0))) {
        console.log('is a leap year');
    } else {
        console.log('is not a leap year');
    }
 }

leapYear(2000);