let testDate = new Date('June 12, 1997');

function testForLeapYear(date){

    if (date.getFullYear() % 4 == 0  && date.getFullYear() % 100 !== 0 ||  date.getFullYear() % 400 == 0) {

        return true;

    } else {

        return false;

    }

}

module.exports = {

    testForLeapYear

}

console.log(testForLeapYear(testDate));