/*Create a function that takes a Date object
 as a parameter and returns true if the year of
 the provided date is a leap year in the Gregorian calendar. */


   

function leapYear (myDate) {
     
    //creating a boolean to check if it is a leap year
    let isLeap = false;       
    //obtaining the year from the provided date   
    let myYear = myDate.getUTCFullYear();
    //checking if the year provided is a leap year 
    if (myYear % 400 == 0) isLeap = true;
    else if (myYear % 100 != 0 && myYear % 4 == 0) isLeap = true;
    //printing results to console log
    console.log(isLeap);
         
}
leapYear(new Date('01/01/2000'));