/*
1.	Create a function that takes a Date object as a parameter and 
    returns true if the year of the provided date is a leap year in the Gregorian calendar.
*/

//Another Function
// let leap = year => new Date(year, 1, 29).getDate() === 29;
// //Outputs 
// console.log("Challenge 1: Find leap year.");
// console.log(leap(2016));

function leapYear(year)
{
    year = new Date(year)
    //Year is not a multiple of 100 and is a multiple of 4 but is a multiple of 400
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
        return true;
    else
        return false;
}
module.exports = leapYear