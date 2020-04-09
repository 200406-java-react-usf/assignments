

function leapytest(){
    x = Date.now.prototype.getFullYear()
    if (x%4 == 0 ){
        console.log("It's a leap year!")
    }
    else if ( x%100 == 0 && x%400 !== 0){
        console.log("it's not a leap year")
    }

}
 leapytest();

