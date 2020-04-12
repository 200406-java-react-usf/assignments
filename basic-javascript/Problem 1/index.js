function checkLeapYear(currentDate) {
    let err = 'No valid Date Object';
    let currentYear = new Date()
    if(typeof currentDate != typeof currentYear){
        return err;
    }
    currentYear = currentDate.getFullYear();
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