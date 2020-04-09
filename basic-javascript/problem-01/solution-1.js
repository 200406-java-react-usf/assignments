/*
    Korey Keipe
    Problem #1

    1.) Create a function that takes a Date object as a parameter and returns true if the year of the provided date is a leap year in the Gregorian calendar.
*/

var year = new Date();

function leapCheck(input){

    var fullYear = input.getFullYear();

        if (fullYear % 4 == 0 || (fullYear % 100 != 0 && fullYear % 400 == 0)){
            return true;
        }
        else{
            return false;
        }
}

console.log(leapCheck(year));