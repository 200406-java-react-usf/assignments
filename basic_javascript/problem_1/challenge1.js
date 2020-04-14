function leapYear(userInput) {
    if (typeof(userInput) != 'string')
        return (`Please provide a string with a date format of "mm/dd/yyyy"`)
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(userInput))
        return (`Please Provide date formate in "mm/dd/yyyy"`);

    var s = Date.parse(userInput);
    var d = new Date(s);
    var date = d.getFullYear(s);



    return (((date % 4 === 0) && (date % 100 !== 0)) || date % 400 === 0) ? true : false;

};

module.exports = {
    leapYear,
};