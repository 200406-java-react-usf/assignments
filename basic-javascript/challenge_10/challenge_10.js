/**Basic JavaScript Challenge 10
* 
* by Kennedy Wandelt
* 
* A function that takes in a string as a parameter. It must return A, B, C, D, or E depending on the following criteria:
    If the first character is in the set {a, e, i, o, u}, then return A.
    If the first character is in the set {b, c, d, f, g}, then return B.
    If the first character is in the set {h, j, k, l, m}, then return C.
    If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
    If none of these, then return E.
**/
myFunction = (userString) => {
    firstChar = userString[0];
    if (firstChar == 'a' || firstChar == 'e' || firstChar == 'i' || firstChar == 'o' || firstChar == 'u') {
        return 'A';
    }
    else if (firstChar == 'b' || firstChar == 'c' || firstChar == 'd' || firstChar == 'f' || firstChar == 'g') {
        return 'B';
    }
    else if (firstChar == 'h' || firstChar == 'j' || firstChar == 'k' || firstChar == 'l' || firstChar == 'm') {
        return 'C';
    }
    else if (firstChar == 'n' || firstChar == 'p' || firstChar == 'q' || firstChar == 'r' || firstChar == 's' || firstChar == 't' || firstChar == 'v' || firstChar == 'x' || firstChar == 'y' || firstChar == 'z') {
        return 'D';
    }
    else {
        return 'E';
    }
}

console.log(myFunction('Aha! this is my test'));