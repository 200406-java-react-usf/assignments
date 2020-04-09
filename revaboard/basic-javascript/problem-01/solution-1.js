//inpute will be Date object
function leapYear(input){
//take the year 
    let year = input.getFullYear();
    if(year%4==0 && year%100 != 0 || year%400 ==0 ){
        return true;
    }else{
        return false;
    }
}
let d = new Date();
console.log(leapYear(d));