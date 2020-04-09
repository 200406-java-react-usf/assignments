function testSearch(input) {
    input = input.toLowerCase();
    if (input.includes("test")) {
        let test = input.toLowerCase();
        test = input.split(" ");


        let remove = test.splice(test.indexOf("test"), 1);

        return test.join(" ");

    }

}

let test = "you are the best Test ez as pie";
// counting = test.count("test")
// test = test.split(" ");
// test = test.indexOf("test");
// console.log(counting)
// console.log(test);

console.log(testSearch(test));