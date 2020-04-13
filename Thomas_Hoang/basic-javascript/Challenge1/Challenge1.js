//Checks if a year is a leap year
function CheckLeapYear(year){
    if ((year%4) !== 0){
        console.log(false)
    }else if ((year%4) == 0)
        return(true)
}

module.exports = CheckLeapYear;