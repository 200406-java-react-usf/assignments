function checkLeapYear(currentDate) {
    var currentYear = currentDate.getFullYear();
    if ((currentYear % 4) == 0 && (currentYear % 100) != 0) {
        console.log(true);
    }
    else {
        if (currentYear % 400 == 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}


checkLeapYear(new Date(1602,1,1));