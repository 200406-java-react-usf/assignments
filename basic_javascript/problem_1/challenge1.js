function leapYear(userInput) {
    var s = Date.parse(userInput);
    var d = new Date(s);
    var date = d.getFullYear(s);

    if (((date % 4 === 0) && (date % 100 !== 0)) || date % 400 === 0)
        return true;
    else
        return false;
};

console.log(leapYear(Date.now()))

module.exports = {
    leapYear,
};