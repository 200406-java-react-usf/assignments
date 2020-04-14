/**
 * JavaScript Assignment #12
 * By: Mohamed Aboulela
 * Purpose: Create a function which takes a 3x3 2-dimensional array. 
 * Validate that each array index holds only a value of “X”, “O”, or an empty string. 
 * Have the function evaluate a game of tic tac toe represented by the 2D array.  
 * Should have a result for a tie, each winnerchoice, or an invalid game.
 */

function tictactoe(board) { 
    let counter = 0;
    let winnerchoice = [];

    function match(arr) {
        for(var i = 1; i < arr.length; i++) {
            if(arr[0] != arr[i])
                return false;
        }
            return true;
    }

    //if statements to check every possibility

    if(match([board[0][0],board[0][1],board[0][2]]) && !("")) {
        counter++;
        winnerchoice.push(board[0][0]);
    }

    if((board[1][0] == board[1][1]) && (board[1][1] == board[1][2]) && (board[1][2] != '')) {
        counter++;
        winnerchoice.push(board[1][0]);
    }

    if((board[2][0] == board[2][1]) && (board[2][1] == board[2][2]) && (board[2][2] != ''))  {
        counter++;
        winnerchoice.push(board[2][0]);
    }


    //checks for vertical wins


    if((board[0][0] == board[1][0]) && (board[1][0] == board[2][0]) && (board[2][0] != ''))  {
        counter++;
        winnerchoice.push(board[0][0]);
    }

    if((board[0][1] == board[1][1]) && (board[1][1] == board[2][1]) && (board[2][1] != '')) {
        counter++;
        winnerchoice.push(board[0][1]);
    }

    if((board[0][2] == board[1][2]) && (board[1][2] == board[2][2]) && (board[2][2] != '')) {
        counter++;
        winnerchoice.push(board[0][2]);
    }


    //checks for diagnol wins


    if((board[0][0] == board[1][1]) && (board[1][1] == board[2][2]) && (board[2][2] != '')) {
        counter++;
        winnerchoice.push(board[0][0]);
    }

    if((board[0][2] == board[1][1]) && (board[1][1] == board[2][0]) && (board[2][0] != '')) {
        counter++;
        winnerchoice.push(board[0][2]);
    }

    if((counter > 1) && !(match(winnerchoice)))
        return 'Invalid result';
    if(counter)   {
        return (winnerchoice[0] + ' is the winner');
    }
    let full = (board.join().replace(/,/g, "").length == 9) ? true:false;
    if((counter == 0) && !full)
        return 'Game in progress, no winner yet';
    if((counter == 0) && full)
        return 'Tie game';
}


console.log(tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]));
console.log(tictactoe([['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']]));
console.log(tictactoe([['', 'O', 'X'], ['X', 'O', ''], ['', 'O', 'X']]));
console.log(tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]));

module.exports = {
    tictactoe
};
