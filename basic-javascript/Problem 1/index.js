var currentDate = new Date();
let trialDate = new  Date(2000,0,6);


function checkLeapYear (currentDate){
    var currentYear = currentDate.getFullYear();
    if(((currentYear % 4) == 0) && (!(currentDate % 100) == 0)){
        console.log(true);
    }
    else if(currentYear % 400 == 0){
        console.log(true);
    }
    else {
        console.log(false);
    }
}


console.log(checkLeapYear(trialDate));