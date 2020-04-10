function checkLeapYear(currentDate) {
    let currentYear = currentDate.getFullYear();
    if ((currentYear % 4) == 0 && (currentYear % 100) != 0) {
        return true;
    }
    else {
        if (currentYear % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = checkLeapYear;
//checkLeapYear(new Date(1602,1,1));