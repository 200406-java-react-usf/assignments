//Create a function that takes in a string as a parameter. It must return A, B, C, D, or E depending on the following criteria:
// If the first character is in the set {a, e, i, o, u}, then return A.
// If the first character is in the set {b, c, d, f, g}, then return B.
// If the first character is in the set {h, j, k, l, m}, then return C.
// If the first character is in the set {n, p, q, r, s, t, v, x, y, z}, then return D.
// If none of these, then return E.

function firstCharacter(str){
    const fChar = str.charAt(0)
    const firstChar = fChar.toLowerCase()
    const A = ['a', 'e', 'i', 'o', 'u']
    const B = ['b', 'c', 'd', 'f', 'g']
    const C = ['h', 'j', 'k', 'l', 'm']
    const D = ['n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z']

        if (A.includes(firstChar)){
            return("A")
        }else if (B.includes(firstChar)){
            return("B")
        }else if (C.includes(firstChar)){
            return("C")
        }else if (D.includes(firstChar)){
            return("D")
        }else
            return("E")
    }

    firstCharacter('This is the test string it should be')