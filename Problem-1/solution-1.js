//Create a function that takes a Date object as a parameter and returns true if the year of the provided date is a leap year in the Gregorian calendar.

const isGregorian = (date) => {
    if(date%4==0){
        if(date%100==0){
            if(date%400==0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
        
    }else{
        return false;
    }    
}
//no
console.log("2021 is a leap year?: " + isGregorian(2021));
//yes
console.log("2400 is a leap year?: " + isGregorian(2400));
//yes
console.log("1988 is a leap year?: " + isGregorian(1988));

module.exports = {
    isGregorian
}