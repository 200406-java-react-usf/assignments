const charSet = (iString) => {
    let firstChar = iString.charAt(0);
    firstChar = firstChar.toLowerCase();
    let answer = ''
    switch(firstChar){
        case 'a','e','i','o','u':
            answer = 'A';
            break;
        case 'b','c','d','f','g':
            answer = 'B';
            break;
        case 'h','j','k','l','m':
            answer = 'C';
            break;
        case 'p','q','r','s','t','v','w','x','z':
            answer = 'D';
            break;
        default:
            answer = 'E';
            break;
    }
    return answer;
}

module.exports = charSet;