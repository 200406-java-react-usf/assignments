/**
 *  Create a function that takes in a string as a parameter. It must return A, B, C, D, or E depending on the following criteria:
 *
 *  If the first character is in the set {a, e, i, o, u}, then return A.
 *  If the first character is in the set {b, c, d, f, g}, then return B.
 *  If the first character is in the set {h, j, k, l, m}, then return C.
 *  If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
 *  If none of these, then return E.
 *
 */


//An ascii implementation might be a little nicer
let caseA = ['a', 'e', 'i', 'o', 'u'];
let caseB = ['b', 'c', 'd', 'f', 'g'];
let caseC = ['h', 'j', 'k', 'l', 'm'];
let caseD = ['n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z']

function determineCase(myString) {
    //Not case sensistive
    myString = myString.toLowerCase();
    whichCase = "E";
    subjectChar = myString.charAt(0);
    if (caseA.includes(subjectChar)) {
        whichCase = "A";
    } else if (caseB.includes(subjectChar)) {
        whichCase = "B";
    } else if (caseC.includes(subjectChar)) {
        whichCase = "C";
    } else if (caseD.includes(subjectChar)) {
        whichCase = "D";
    }
    return whichCase;
}

console.log(determineCase("Test"));