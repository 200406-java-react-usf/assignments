function firstCharacter(userInput) {
    if (typeof(userInput) != 'string')
        return ("Please input a valid String data type")

    userInput = userInput.toLowerCase();
    let testCase = userInput[0];
    let a = ['a', 'e', 'i', 'o', 'u'];
    let b = ['b', 'c', 'd', 'f', 'g'];
    let c = ['h', 'j', 'k', 'l', 'm'];
    let d = ['n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'];



    if (a.includes(testCase))
        return "A";
    else if (b.includes(testCase))
        return "B";
    else if (c.includes(testCase))
        return "C";
    else if (d.includes(testCase))
        return "D";
    else
        return "E";


}

module.exports = {
    firstCharacter
}