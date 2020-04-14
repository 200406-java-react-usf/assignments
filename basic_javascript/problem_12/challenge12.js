ticTacToe = (arr) => {

    // setting wining variables 
    let xWin = false;
    let oWin = false;
    let blank = false;


    // checking to see if black exist
    for (i of arr) {
        for (j of i) {
            if (j == '') {
                blank = true;
            }
            if (j != 'X' && j != 'O' && j != '') throw new Error("Incorrect input, please provide X's or O's");
        }
    }
    // setting up the matrix
    a1 = arr[0][0];
    a2 = arr[1][0];
    a3 = arr[2][0];
    b1 = arr[0][1];
    b2 = arr[1][1];
    b3 = arr[2][1];
    c1 = arr[0][2];
    c2 = arr[1][2];
    c3 = arr[2][2];
    // all possible winning conditions
    // top horizontal check 
    if (a1 == b1 && b1 == c1) {
        if (a1 == 'X')
            xWin = true;
        else if (a1 == 'O')
            oWin = true;
    }
    // middle horizontal check
    if (a2 == b2 && b2 == c2) {
        if (a2 == 'X')
            xWin = true;
        else if (a2 == 'O')
            oWin = true;
    }
    // bottom horizontal check 
    if (a3 == b3 && b3 == c3) {
        if (a3 == 'X')
            xWin = true;
        else if (a3 == 'O')
            oWin = true;
    }
    // left vertical check 
    if (a1 == a2 && a2 == a3) {
        if (a1 == 'X')
            xWin = true;
        else if (a1 == 'O')
            oWin = true;
    }
    // middle vertical check 
    if (b1 == b2 && b2 == b3) {
        if (b1 == 'X')
            xWin = true;
        else if (b1 == 'O')
            oWin = true;
    }
    // right vertical check
    if (c1 == c2 && c2 == c3) {
        if (c1 == 'X')
            xWin = true;
        else if (c1 == 'O')
            oWin = true;
    }
    // top left to bottom right corner diagonal check 
    if (a1 == b2 && b2 == c3) {
        if (c3 == 'X')
            xWin = true;
        else if (c3 == 'O')
            oWin = true;
    }

    // bottom left to top right corner diagonal check 
    if (a3 == b2 & b2 == c1) {
        if (c1 == 'X')
            xWin = true;
        else if (c1 == 'O')
            oWin = true;
    }

    if (oWin && xWin)
        return ("Invalid Result")
    else if (!oWin && !xWin) {
        if (blank) {
            return ("Game in progress, no winner yet");
        } else {
            return ("It was a tie");
        }
    } else if (oWin)
        return ('O is the winner');
    else if (xWin)
        return ('X is the winner')

}

// userBoard = [
//     ['X', 'O', 'X'],
//     ['O', 'X', 'O'],
//     ['O', 'X', 'O']
// ]
// console.log(ticTacToe(userBoard));
module.exports = {
    ticTacToe
};