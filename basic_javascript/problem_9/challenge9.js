function longestString(string) {
    wordArray = string;
    let long1 = '';
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > long1.length)
            long1 = wordArray[i];
    }
    index = wordArray.indexOf(long1)
    return [index, long1];
}

let test = `
I'm a genius in disguise, wear my heart on my sleeve
And you forced to oblige to a king in his prime (Yeah, yeah)
Everybody get in line, sit back, watch the stars align
I finesse like my life on the line
Was a diamond in the rough and now I shine (Woo)`;
test = test.replace(/,/g, '');
test = test.replace(/\n/g, ' ');
test = test.replace(/[{()}]/g, ' ');
wordArray = test.split(" ");

console.log(longestString(wordArray));