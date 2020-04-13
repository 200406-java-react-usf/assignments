const firstChar = string => 
{
    const x = string.charAt(0);
    const A = ['a', 'e', 'i', 'o', 'u'];
    const B = ['b', 'c', 'd', 'f', 'g'];
    const C = ['h', 'j', 'k', 'l', 'm'];
    const D = ['n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'x'];

    if (A.includes(x)) return 'A';
    else if (B.includes(x)) return 'B';
    else if (C.includes(x)) return 'C';
    else if (D.includes(x)) return 'D';
    else return 'E';
};

module.exports = 
{
    firstChar
}