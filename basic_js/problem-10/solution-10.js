function switches(str, onComplete, onError){

    if (typeof str != "string"){
        onError('Input is not a string');
    }
    else {
        switch (str.charAt(0)){
            case 'a': case 'e': case 'i': case 'o': case 'u':
                onComplete('A');
                break;
            case 'b': case 'c': case 'd': case 'f': case 'g':
                onComplete('B');
                break;
            case 'h': case 'j': case 'k': case 'l': case 'm':
                onComplete('C');
                break;
            case 'n': case 'p': case 'q': case 'r': case 's':
            case 't': case 'v': case 'x': case 'y': case 'z':
                onComplete('D');
                break;
            default:
                onComplete('E')
        }
    }
}

module.exports = {
    switches
}