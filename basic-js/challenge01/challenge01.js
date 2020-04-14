 
function leapytest(x){
    
    if (x%4 == 0  || x%100 !== 0){
        return("It's a leap year!")
    }
    else if (x%400 !== 0){
        return ("It is not a leap year")
    }
    else { return( "It is not a leap year")}

}



 module.exports = leapytest
