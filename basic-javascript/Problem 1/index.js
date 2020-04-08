var currentDate = new Date();
let trialDate = new  Date(96,0,6);


function checkLeapYear (currentDate){
    var currentYear = currentDate.getFullYear();
    if(currentYear % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}


console.log(checkLeapYear(trialDate));