/*Create a function that takes a Date object
 as a parameter and returns true if the year of
 the provided date is a leap year in the Gregorian calendar. */


   

const leapYear = (myDate, cb) => {
    if(myDate.constructor.toString().indexOf("Date") <= -1) return 'wrong input format, please provide a date';
    //creating a boolean to check if it is a leap year
    let isLeap = false;       
    //obtaining the year from the provided date   
    let myYear = myDate.getFullYear();
    //checking if the year provided is a leap year 
    if (myYear % 400 == 0) isLeap = true;
    else if (myYear % 100 != 0 && myYear % 4 == 0) isLeap = true;
    //printing results to console log
   // console.log(isLeap);
   //cb(isLeap);
   return isLeap;
         
}
console.log(leapYear(new Date('01/01/2000')))
module.exports = {
    leapYear
}
