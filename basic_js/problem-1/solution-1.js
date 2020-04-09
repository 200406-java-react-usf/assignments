function LeapYear(input) {
    let date = new Date(input);

    var year = 1900 + date.getYear(); 

    var test1 = year%4;
    var test2 = year%100;
    var test3 = year%400

    if (test1 == 0) {
        if (test2 == 0){
            if (test3 == 0){
                return "The year " + (year) +" is a leap year."
            }
            else{
                return "The year " + (year) +" is not a leap year."
            }
        }
        else {
            return "The year " + (year) +" is a leap year."
        }
       return "The year " + (year) +" is a leap year."
    }
    else {
        return "The year " + (year) +" is not a leap year."
    }
}

console.log(LeapYear('Dec 29, 1936'))
console.log(LeapYear('Dec 29, 1900'))
console.log(LeapYear('Dec 29, 2000'))
console.log(LeapYear('Dec 29, 1935'))