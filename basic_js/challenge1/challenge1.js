function LeapYear(input) {
    let date = new Date(input);

    var year = date.getYear(); 

    var test = year%4;

    if (test == 0) {
       return "The year " + (1900 + year) +" is a leap year."
    }
    else {
        return "The year " + (1900 + year) +" is not a leap year."
    }
}

console.log(LeapYear('Dec 29, 1936'))