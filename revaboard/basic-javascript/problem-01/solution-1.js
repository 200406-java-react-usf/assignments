//inpute will be Date object
function leapYear(input){
//take the year 
    if(input){
    let year = input.getFullYear();
    if(year%4==0 && year%100 != 0 || year%400 ==0 ){
        return true;
    }else{
        return false;
    }}else{
        return 'invalid input';
    }
}

module.exports = leapYear;