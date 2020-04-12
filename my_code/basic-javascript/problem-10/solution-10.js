/*
    Basic JavaScript Assignment
    Problem #10

    Korey Keipe

    10.)Create a function that takes in a string as a parameter. It must return A, B, C, D, or E depending on the following criteria:

        If the first character is in the set {a, e, i, o, u}, then return A.
        If the first character is in the set {b, c, d, f, g}, then return B.
        If the first character is in the set {h, j, k, l, m}, then return C.
        If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
        If none of these, then return E.

*/

function idStringByChar(input){

    firstChar = input.charAt(0);
    
    let setA = 'aeiou';
    let setB = 'bcdfg';
    let setC = 'hjklm';
    let setD = 'npqrstvxyz';

    if(setA.includes(firstChar)){
        console.log('A');
    }else if(setB.includes(firstChar)){
        console.log('B');
    }else if(setC.includes(firstChar)){
        console.log('C');
    }else if(setD.includes(firstChar)){
        console.log('D');
    }else{
        console.log('E');
    }
}

idStringByChar('0esting');

module.exports = idStringByChar;