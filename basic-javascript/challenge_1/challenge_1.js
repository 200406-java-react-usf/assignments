/**Basic JavaScript Challenge 1
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which takes the parameter year and determines if it is a leap year
**/

function isLeapYear(dateToBeChecked){
    //checking to see if it is a truthy value (dates can only be truthy)
    if(!dateToBeChecked) throw new Error("Input is not a Truthy value.");

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
