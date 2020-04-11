const checkLeapYear = (date) => {

   if(typeof date !== 'object') throw Error ('You did not give me a valid date.');
   
    let year = date.getFullYear();
    //console.log(`You are looking to see if ${year} is a leap year...`);
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) return true;
    else return false;
}

module.exports = {
    checkLeapYear
};