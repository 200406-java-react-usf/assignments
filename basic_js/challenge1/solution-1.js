/** 
 * Problem 1: Create a function that takes a Date object as a parameter and 
 * returns true if the year of the provided date is a leap year in the Gregorian calendar.
 */

//setting date var to new date function
var date = new Date();

function leapYear(userInput){
    
    var leapYear = userInput.getFullYear();
    
    //logic check to see if inputed year meets criteria of a leap year
    if (leapYear % 4 === 0 && leapYear % 100 != 0 || leapYear % 400 === 0) {
        console.log(true);}
        
        else {
        console.log(false);};
};
//instantiation
leapYear(date);

//function export
module.exports = {
    leapYear,
};