//Set Date
var date = new Date();
function leapYear(input){
    var leapYear = input.getFullYear();
//run boolean
    if (leapYear % 4 === 0 && leapYear % 100 != 0 || leapYear % 400 === 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
leapYear(date);
