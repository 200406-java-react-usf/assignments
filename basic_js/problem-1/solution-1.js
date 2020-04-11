function LeapYear(input, onComplete, onError) {
    let date = new Date(input);
    let year = date.getFullYear(); 
    
    if(!year){
        onError('Bad request. Input provided is not valid');
        return;
    }

    else {
        

        var condition1 = year%4;
        var condition2 = year%100;
        var condition3 = year%400

        if (condition1 == 0 && condition2 != 0 || condition3 ==0) {
            onComplete('Is a leap year.');
        }
        else onComplete('Is not a leap year.');
        return;
    }
    
}
module.exports= {LeapYear};

