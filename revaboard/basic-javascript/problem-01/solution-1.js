//inpute will be Date object
function leapYear(input){
//take the year 
    var year = input.getFullYear();
    if(year%4==0){
        if(year%100 == 0){
            if (year%400 == 0){
                return true;
            }
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}
var d = new Date();
console.log(leapYear(d));