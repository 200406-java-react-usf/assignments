const ticTacToe = (board) => {
    //board is a 3x3 2D array 
    if(typeof board !== typeof []) throw Error ('You did not send me an array');

    let gameStillGoing = false;

    //tests to see if there are invalid characters or if the board is NOT 3x3
    for(let i=0; i<board.length; i++){
        if (i===3) throw Error ('Your tic-tac-toe board is only supposed to be 3x3!');
        for(let j=0; j<board[i].length; j++){
            if(j===3) throw Error ('Your tic-tac-toe board is only supposed to be 3x3!');
            if(board[i][j] !== 'X' && board[i][j] !== 'O' && board[i][j] !== '') throw Error ('Invalid character on board');
            if(board[i][j] === '') gameStillGoing = true;
        }
    }

    //8 ways to win
    a1 = board[0][0];
    a2 = board[1][0];
    a3 = board[2][0];
    b1 = board[0][1];
    b2 = board[1][1];
    b3 = board[2][1];
    c1 = board[0][2];
    c2 = board[1][2];
    c3 = board[2][2];

    let xWon = false;
    let oWon = false;

    const testWon = (a,b,c) => {
        if(a === b && b === c){
            if(a === 'X') xWon = true;
            if(a === 'O') oWon = true;
        }
    }

    testWon(a1,b1,c1);
    testWon(a2,b2,c2);
    testWon(a3,b3,c3);
    testWon(a1,a2,a3);
    testWon(b1,b2,b3);
    testWon(c1,c2,c3);
    testWon(a1,b2,c3);
    testWon(a3,b2,c1);

    if (xWon && oWon) return ('Invalid result');
    else if(xWon) return 'X is the winner!';
    else if(oWon) return 'O is the winner!';
    else if((!xWon && !oWon) && gameStillGoing) return 'The game is still going on';


};


// ();
// ();
// ();
// ;


module.exports = {
    ticTacToe
}