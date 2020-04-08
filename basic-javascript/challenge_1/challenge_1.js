/**Basic JavaScript Challenge 1
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which takes the parameter year and determines if it is a leap year
**/


//cheap trick to account for the local time zone

function isLeapYear(dateToBeChecked){
    year = dateToBeChecked.getUTCFullYear()
    if (year % 4 === 0 || year % 400 === 0) {
        return true
    }
    else {
        return false
    }
}

let date = new Date("2000")
console.log(isLeapYear(date))


