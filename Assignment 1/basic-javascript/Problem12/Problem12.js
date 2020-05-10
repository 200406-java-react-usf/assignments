/**
 * Create a function which takes a 3x3 2-dimensional array. 
 * Validate that each array index holds only a value of “X”, “O”, or an empty string. 
 * Have the function evaluate a game of tic tac toe represented by the 2D array.  
 * Should have a result for a tie, each winner, or an invalid game.
 */

/**
 *  Test Cases:
 * 
 *  tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]) 
 *  prints “Invalid result”
 *
 *  tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']])
 *  Prints “X is the winner”
 *
 *  tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']]) 
 *  Prints “O is the winner”
 * 
 *  tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]) 
 *  Prints “Game in progress, no winner yet”
 * 
 */

// 1 2 3
// 4 5 6
// 7 8 9

const tictactoe = function (board) {
    if (!(Array.isArray(board))) {
        throw new TypeError();
    }
    let validGame = true;
    let winner = "F";
    let gameInProgress = false;
    let message = "Invalid result";
    if (!fair(board)) {
        validGame = false;
    } else {
        let winConditions = [[[0,0],[0,1],[0,2]], 
                        [[1,0],[1,1],[1,2]], 
                        [[2,0],[2,1],[2,2]], 
                        [[0,0],[1,0],[2,0]], 
                        [[0,1],[1,1],[2,1]], 
                        [[0,2],[1,2],[2,2]], 
                        [[0,0],[1,1],[2,2]], 
                        [[2,0],[1,1],[0,2]]];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == ""){
                    gameInProgress = true;
                    break;
                }
            }
        }
        for (let i = 0; i < winConditions.length; i++) {
            let win = true;
            let x1 = winConditions[i][0][0];
            let x2 = winConditions[i][1][0];
            let x3 = winConditions[i][2][0];
            let y1 = winConditions[i][0][1];
            let y2 = winConditions[i][1][1];
            let y3 = winConditions[i][2][1];
            if (!(typeof board[x1][y1] === "string") ||
                !(typeof board[x2][y2] === "string") ||
                !(typeof board[x3][y3] === "string")) {
                    throw new TypeError();
                }
            if (board[x1][y1] == board[x2][y2] && board[x2][y2] == board[x3][y3]) {
                if (winner == "F" || winner == board[x1][y1]) {
                    winner = board[x1][y1];
                } else {
                    validGame = false;
                    break;
                }
            }
        }
    }
    if (!validGame) {
        message = "Invalid result";
    } else {
        if (winner == "F" && gameInProgress) {
            message = "Game in progress, no winner yet";
        } else if (winner == "X") {
            message = "X is the winner";
        } else if (winner == "O") {
            message = "O is the winner";
        }
    }
    return message;
}

function fair(board) {
    let isfair = true;
    let x = 0;
    let o = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'X') {
                x++;
            } else if (board[i][j] == 'O') {
                o++;
            }
        }
    }
    if (Math.abs(x-o) > 1) {
        isfair = false;
    }
    return isfair;
}

module.exports = {
    tictactoe
};

console.log(tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]));