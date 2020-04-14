/*
Create a function that takes in a string as a parameter. It must return A, B, C, D, or E depending on the following criteria:
●	If the first character is in the set {a, e, i, o, u}, then return A.
●	If the first character is in the set {b, c, d, f, g}, then return B.
●	If the first character is in the set {h, j, k, l, m}, then return C.
●	If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
●	If none of these, then return E.
*/

function findChar(arr)
{ 
   let fChar = arr.charAt(0);
    let set1 = 'aeiou';
    let set2 = 'bcdfg';
    let set3 = 'hjklm';
    let set4 = 'npqstvxyz';
    
    if(set1.includes(fChar))
    {
        return 'A';
    }
    else if(set2.includes(fChar))
    {
        return 'B';
    }
    else if(set3.includes(fChar))
    {
        return 'C';
    }
    else if(set4.includes(fChar))
    {
        return 'D';
    }
    else
    {
        return 'E';
    }
}

console.log("Challenge 10");
console.log(findChar('abbbbb'));
module.exports = findChar;