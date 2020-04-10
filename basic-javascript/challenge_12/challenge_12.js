/**Basic JavaScript Challenge 12
* 
* by Kennedy Wandelt
* 
* Create a function which takes a 3x3 2-dimensional array. Validate that each array index holds only a value of “X”, “O”, or an empty string. Have the function evaluate a game of tic tac toe represented by the 2D array.  Should have a result for a tie, each winner, or an invalid game.
**/

whoWins = (gameBoard) => {
    //validation
    let blankExists = false;
    for (row of gameBoard) {
        for (spot of row) {
            if (spot == '') {
                blankExists = true;
            }
            if (spot != 'X' && spot != 'O' && spot != '') throw new Error("Invalid character used!");
        }
    }
    /*ways to win 1a,1b,1c ; 2a,2b,2c ; 3a,3b,3c; 1a,2a,3a; 1b,2b,3b; 1c,2c,3c; 1a,2b,3c; 1c,2b,3a : 8 ways
      a   b   c
    1 _ | _ | _
    2 _ | _ | _
    3   |   |
    */
    a1 = gameBoard[0][0];
    a2 = gameBoard[1][0];
    a3 = gameBoard[2][0];
    b1 = gameBoard[0][1];
    b2 = gameBoard[1][1];
    b3 = gameBoard[2][1];
    c1 = gameBoard[0][2];
    c2 = gameBoard[1][2];
    c3 = gameBoard[2][2];

    let xIsWinner = false;
    let oIsWinner = false;

    if(a1 == b1 && b1 == c1){
        if (a1 == 'X') {
            xIsWinner = true;
        }
        else if (a1 == 'O') {
            oIsWinner = true;
        }
    }
    if(a2 == b2 && b2 == c2){
        if (a2 == 'X') {
            xIsWinner = true;
        }
        else if (a2 == 'O') {
            oIsWinner = true;
        }
    }
    if(a3 == b3 && b3 == c3){
        if (a3 == 'X') {
            xIsWinner = true;
        }
        else if (a3 == 'O') {
            oIsWinner = true;
        }
    }
    if(a1 == a2 && a2 == a3){
        if (a1 == 'X') {
            xIsWinner = true;
        }
        else if (a1 == 'O') {
            oIsWinner = true;
        }
    }
    if(b1 == b2 && b2 == b3){
        if (b1 == 'X') {
            xIsWinner = true;
        }
        else if (b1 == 'O') {
            oIsWinner = true;
        }
    }
    if(c1 == c2 && c2 == c3){
        if (c1 == 'X') {
            xIsWinner = true;
        }
        else if (c1 == 'O') {
            oIsWinner = true;
        }
    }
    if(a1 == b2 && b2 == c3){
        if (a1 == 'X') {
            xIsWinner = true;
        }
        else if (a1 == 'O') {
            oIsWinner = true;
        }
    }
    if(a3 == b2 && b2 == c1){
        if (a3 == 'X') {
            xIsWinner = true;
        }
        else if (a3 == 'O') {
            oIsWinner = true;
        }
    }

    if(oIsWinner && xIsWinner){
        console.log("Invalid result")
    }
    else if(!oIsWinner && !xIsWinner) {
        if(blankExists) {
            console.log('Game in progress, no winner yet');
        }
        else {
            console.log("It was a tie");
        }
    }
    else if(oIsWinner) {
        console.log('O is the winner');
    }
    else if(xIsWinner) {
        console.log('X is the winner');
    }
}
userBoard = [['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']]
whoWins(userBoard);