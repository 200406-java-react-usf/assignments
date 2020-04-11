//Checks if a year is a leap year
function CheckLeapYear(year){
    if ((year%4) !== 0) 
        return('This year is not a leap year')
    else if ((year%4) == 0)
        return('This is a leap year')
}

console.log(CheckLeapYear(1999));