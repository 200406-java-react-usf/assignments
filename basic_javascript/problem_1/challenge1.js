function leapYear(userInput) {
    var s = Date.parse(userInput);
    var d = new Date(s);
    var date = d.getFullYear(s);

    return (((date % 4 === 0) && (date % 100 !== 0)) || date % 400 === 0) ? true : false;

};

module.exports = {
    leapYear,
};