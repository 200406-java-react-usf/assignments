/**
 * Problem 10: Create a function that takes in a string as a parameter. 
 * It must return A, B, C, D, or E depending on the following criteria:

If the first character is in the set {a, e, i, o, u}, then return A.
If the first character is in the set {b, c, d, f, g}, then return B.
If the first character is in the set {h, j, k, l, m}, then return C.
If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
If none of these, then return E.
 */

function charCheck(str){
    let char = 'E';
    let regex1 = /a|e|i|o|u/i;
    let regex2 = /b|c|d|f|g/i;
    let regex3 = /h|j|k|l|m/i;
    let regex4 = /n|p|q|r|s|t|v|x|y|z/i;

    if(regex1.test(str[0]))
        char = 'A';
    if(regex2.test(str[0]))
        char = 'B';
    if(regex3.test(str[0]))
        char = 'C';
    if(regex4.test(str[0]))
        char = 'D';
    return char;
}

module.exports = {
    charCheck
}