/**
 * JavaScript Assignment #10
 * By: Mohamed Aboulela
 * Purpose: Create a function that takes in a string as a parameter. It must return A, B, C, D, or E depending on the following criteria:
 * If the first character is in the set {a, e, i, o, u}, then return A.
 * If the first character is in the set {b, c, d, f, g}, then return B.
 * If the first character is in the set {h, j, k, l, m}, then return C.
 * If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
 * If none of these, then return E.
 */

//switch statement to check every set from A through E.
const charAarr = "aeiou";
const charBarr = "bcdfg";
const charCarr = "hjklm";
const charDarr = "npqrstvxyz";
let str = "!fuego!";
let str2 = 'mjzkv';
let str3 = 'cqsvq';
let str4 = 'ppufo';
let str5 = 'lhkdn';
let str6 = 'vcyvf';
var checker = str.charAt(0);
let answer = "";

function StringChecker(string) {
    var checker = string.charAt(0);
    if (charAarr.includes(checker))
        return "A";
    else if (charBarr.includes(checker))
        return "B";
    else if (charCarr.includes(checker))
        return "C";
    else if (charDarr.includes(checker))
        return "D";
    else
        return "E";
}

//else if (checker.includes(charBarr))
//    answer = "B";
//else if (checker == charCarr[2])
 //   answer = "C";
//else if (checker == charDarr[0])

/*
    switch(charstring, charstring2, charstring3, charstring4, charstring5) {
        case A:
            if (checker = charstring.chatAt(0))
                return A;
            break;
        case B:
            break;
        case C:
            break;
        case D:
            break;
        case E:
            break;
    }
}
*/
console.log(checker);
console.log(StringChecker(str));
console.log(StringChecker(str2));
console.log(StringChecker(str3));
console.log(StringChecker(str4));
console.log(StringChecker(str5));
console.log(StringChecker(str6));

module.exports = 
    StringChecker;