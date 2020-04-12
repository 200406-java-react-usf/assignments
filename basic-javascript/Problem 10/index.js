const charSet = (iString) => {
    let err = 'Not a string';
    let answer = '';
    if(typeof iString != typeof err){
        return err;
    }

    let str = iString.toLowerCase();
    let firstChar = str.charAt(0);
    //firstChar = firstChar.toLowerCase();

    switch(firstChar){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            answer = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            answer = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            answer = 'C';
            break;
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'z':
            answer = 'D';
            break;
        default:
            answer = 'E';
            break;
    }
    return answer;
}
//console.log(charSet('Patetic'));

module.exports = charSet;