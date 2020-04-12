function leapYear(userInput) {
    if (typeof(userInput) != 'string')
        return (`Please provide a string with a date format of "mm/dd/yyyy"`)
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(userInput))
        return (`Please Provide date formate in "mm/dd/yyyy"`);

    var s = Date.parse(userInput);
    console.log(typeof(s));

    var d = new Date(s);
    console.log(typeof(d));

    var date = d.getFullYear(s);
    console.log(typeof(date));


    return (((date % 4 === 0) && (date % 100 !== 0)) || date % 400 === 0) ? true : false;

};

module.exports = {
    leapYear,
};

console.log(leapYear('11-24-2019'));