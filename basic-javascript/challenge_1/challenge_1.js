/**Basic JavaScript Challenge 1
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which takes the parameter year and determines if it is a leap year
**/

function isLeapYear(dateToBeChecked){

    if(!dateToBeChecked) throw new Error("Input is not a Truthy value.");
    //Checking for dateToBeChecked to be a date object
    //if() throw new Error("Argument is not a Date object.");

    //getting year from date object
    year = dateToBeChecked.getUTCFullYear();


    //determining if year is a leap year
    if (year % 4 === 0 || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    isLeapYear
}
