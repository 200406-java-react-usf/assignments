function leapYear(userInput) {
    date = date(userInput);
    if (((date % 4 === 0) && (date % 100 !== 0)) || date % 400 === 0)
        return true;
    else
        return false;
};

function date(userInput) {
    var date = Date.parse(userInput);
    var d = new Date(date);
    return d.getFullYear();

}
console.log(leapYear("01/22/2024"));