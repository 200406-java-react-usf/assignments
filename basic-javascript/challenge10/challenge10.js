/*Create a function that takes in a string
 as a parameter. It must return A, B, C, D, 
 or E depending on the following criteria:

If the first character is in the set {a, e, i, o, u}, then return A.
If the first character is in the set {b, c, d, f, g}, then return B.
If the first character is in the set {h, j, k, l, m}, then return C.
If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, 
then return D. If none of these, then return E.
*/

GradeString = (str) => {
    if(typeof str != 'string') throw(`${str} is not a string`);
    if(str.length <= 0) throw('String is empty');
    const A = 'a, e, i, o, u';
    const B = 'b, c, d, f, g';
    const C = 'h, j, k, l, m';
    const D = 'n, p, q, r, s, t, v, x, y, z';
    const myChar = str.charAt(0);
    //console.log(myChar);

    if (A.indexOf(myChar) >= 0) return 'A';
    else if (B.indexOf(myChar) >= 0) return 'B';
    else if (C.indexOf(myChar) >= 0) return 'C';
    else if (D.indexOf(myChar) >= 0) return 'D';
    else return 'E';
}
module.exports = GradeString;
//console.log(GradeString('not testing is not dumb'));

