let testDate = new Date('June 12, 1997');

function testForLeapYear(Date){

    if (Date.getFullYear() % 100 == 0){

        return false;

    }
    else if (Date.getFullYear() % 4 == 0 ||  Date.getFullYear() % 400 == 0) {

        return true;

    } else {

        return false;

    }

}

console.log(testForLeapYear(testDate));