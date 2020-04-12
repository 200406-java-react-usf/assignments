const isX = (value) => {
    return value === `X`;
}
const isO = (value) => {
    return value === `O`;
}
const isEmpty = (value) => {
    return value === ``;
}
const checkWinner = (arr) => {
    if (arr.every(isO)) {
        return 'O is the winner';
    }
    else if (arr.every(isX)) {
        return 'X is the winner';
    }
    else {
        return false;
    }
}
const tictactoe = (arr) => {
    let testEle = new Array();
    let chkVertical = new Array();
    let test2 = new Array();
    let final = new Array();
    let st = 0;
    let end = 1;
    let counter = 2;

    for (let x = 0; x < arr.length; x++, st++, end++, counter--) {

        for (let y = 0; y < arr[x].length; y++) {
            if(arr[y].some(isEmpty)){ //check is any element in the array is empty
                return 'Game in progress, no winner yet';
            }
            
            testEle = arr[y].slice(st, end)
            chkVertical.push(testEle[0]);

            if (chkVertical.length == arr.length) {
                break;
            }

        }
        if (arr[x].every(isX) || arr[x].every(isO)) { //test horizontal win
            if (arr[(x + 1)].every(isX) || arr[(x + 1)].every(isO)) {
                return 'Game invalid'
            }
            else if (arr[(x + 1)].every(isX) || arr[(x + 1)].every(isO)) {
                return 'Game invalid'
            }
            else if (arr[(x + 2)].every(isX) || arr[(x + 2)].every(isO)) {
                return 'Game invalid'
            }
            return checkWinner(arr[x]);
        }

        if (checkWinner(chkVertical) != false) {  // test vertical win
            return checkWinner(chkVertical);
        }
        chkVertical = [];

        test2.push(arr[x][x])
        if (test2.length == arr[x].length) { // testing top left to bottom right win
            if (checkWinner(test2) != false) {
                checkWinner(test2);
            }
        }
        final.push(arr[x][counter])
        if (final.length == arr[x].length) { // testing bottom left to top right win
            if (checkWinner(final) != false) {
                checkWinner(final);
            }
        }
    }
    return 'no winner'
}

module.exports = {
    tictactoe,
    isEmpty,
    isO,
    isX,
    checkWinner
}