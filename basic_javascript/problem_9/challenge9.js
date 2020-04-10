let test = `
I'm a genius in disguise, wear my heart on my sleeve
And you forced to oblige to a king in his prime (Yeah, yeah)
Everybody get in line, sit back, watch the stars align
I finesse like my life on the line
Was a diamond in the rough and now I shine (Woo)`;

function longestString(string) {
    string = string.replace(/,/g, '');
    string = string.replace(/\n/g, ' ');
    string = string.replace(/[{()}]/g, ' ');

    wordArray = string.split(" ");
    let long1 = '';
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > long1.length)
            long1 = wordArray[i];
    }
    index = wordArray.indexOf(long1)
    return [index, long1];
}
console.log(longestString(test));