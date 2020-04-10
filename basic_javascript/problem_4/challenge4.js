function testSearch(input) {
    input = input.toLowerCase();
    if (input.includes("test")) {
        let test = input.toLowerCase();

        return test.replace(/\b(test)\b/gi, '')

    }

}

let test = "you are the best test Test ez as pie";

// test = test.replace(/\b(test)\b/gi, '')
// console.log(test)

console.log(testSearch(test));