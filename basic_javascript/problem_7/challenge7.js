function findFib(number) {
    if (typeof(number) != 'number') { return "Please give a valid number" };

    let newNumber = [];
    newNumber[0] = 0;
    newNumber[1] = 1;
    newNumber[-1] = 1;

    if (number > 0) {
        for (x = 2; x <= number; x++) {
            newNumber[x] = newNumber[x - 2] + newNumber[x - 1];
        }
    } else {
        for (x = -2; x >= number; x--) {
            newNumber[x] = newNumber[x + 2] - newNumber[x + 1];
        }
    }
    return newNumber[number];
}

module.exports = {
    findFib
}