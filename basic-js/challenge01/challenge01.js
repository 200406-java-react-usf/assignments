 
function leapytest(x){
    
    if (x%4 == 0  && x%100 !== 0){
        console.log("It's a leap year!")
    }
    else if (x%400 !== 0){
        console.log("it's not a leap year")
    }
    else {console.log( "It is not a leap year")}

}
 leapytest(1203);


 module.exports = leapytest
