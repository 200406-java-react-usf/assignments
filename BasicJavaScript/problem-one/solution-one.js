let testDate = new Date('June 12, 2020');

function testForLeapYear(Date){

    if (Date.getFullYear() % 4 == 0  && Date.getFullYear() % 100 !== 0 ||  Date.getFullYear() % 400 == 0) {

        return true;

    } else {

        return false;

    }

}

module.exports = {

    testForLeapYear

}

//console.log(testForLeapYear(testDate));