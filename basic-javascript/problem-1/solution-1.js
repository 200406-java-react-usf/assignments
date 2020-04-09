function checkLeapYear(currentYear){
    if((currentYear % 4 === 0) && (currentYear % 100 !== 0) || (currentYear % 400 === 0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkLeapYear('2020'));