const sut = require('./challenge9');

let test1 = `
I'm a genius in disguise, wear my heart on my sleeve
And you forced to oblige to a king in his prime (Yeah, yeah)
Everybody get in line, sit back, watch the stars align
I finesse like my life on the line
Was a diamond in the rough and now I shine (Woo)`;
test1 = test1.replace(/,/g, '');
test1 = test1.replace(/\n/g, ' ');
test1 = test1.replace(/[{()}]/g, ' ');
wordArray = test1.split(" ");

test2 = `Write a function to find the longest string from a given
 array of strings and returns the string’s array index`;
wordArray2 = test2.split(" ");

test3 = ['fjkdla;fjlkd;', 329043248320234, [3, 3, 5, 5, 32, 2, 43, 2, 52, 2, 1, 23, 13, 5, 2, 3, 4, 32, 2, ]]

test("Will output the index of the longest string inside the array", () => {
    expect(sut.longestString(wordArray)).toBe(27);
})

test("Will output the index of the longest string inside the array", () => {
    expect(sut.longestString(wordArray2)).toBe(2);
})

test("Will output an error stating that array contains elements that are not a string", () => {
    expect(sut.longestString(test3)).toBe("Your array contains elements that is not a string. Please fix");
})

test("Will output an error stating that array contains elements that are not a string", () => {
    expect(sut.longestString(test3)).toBe("Your array contains elements that is not a string. Please fix");
})

test("Will output an error stating that array contains elements that are not a string", () => {
    expect(sut.longestString('test3')).toBe("Given Parameter incorrect please give me an array");
})