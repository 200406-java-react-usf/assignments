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
const testing = [9, 2, 5, 2, 3, 5, 13, 23];

for (let i = 0; i < testing.length; i++) {
    console.log(findFib(testing[i]))
}