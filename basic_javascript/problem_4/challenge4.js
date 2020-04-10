function testSearch(input) {
    input = input.toLowerCase();
    return test.replace(/\b(test)\b/gi, '')
}

let test = "you are the best test Test ez as pie";

console.log(testSearch(test));