// Create a function which takes a 3x3 2-dimensional array. Validate that each array index holds only a value of “X”, “O”, or an empty string. Have the function evaluate a game of tic tac toe represented by the 2D array.  Should have a result for a tie, each winner, or an invalid game.

// tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]) 
// prints “Invalid result”

// tictactoe([['X', 'O', 'X'] ,['O', 'X', 'O'], ['X', 'O', 'X']])
// Prints “X is the winner”

// tictactoe([['', 'O', 'X'] , ['X', 'O', ''], ['', 'O', 'X']]) 
// Prints “O is the winner”

// 	tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]) 
// Prints “Game in progress, no winner yet”

function tictactoe(twoDiArry){
    let count = 0;
    let winner = '';
    
    //test all winning scenario
    //for horizontal win

    if((twoDiArry[0][0] == twoDiArry[0][1]) && (twoDiArry[0][1]== twoDiArry[0][2]) && (twoDiArry[0][2]!= '')){
        count++;
        winner = twoDiArry[0][0];
    }
    if((twoDiArry[1][0] == twoDiArry[1][1]) && (twoDiArry[1][1] == twoDiArry[1][2]) &&(twoDiArry[1][2] != '')){
        count++;
        winner = twoDiArry[1][0];
    }
    if((twoDiArry[2][0] == twoDiArry[2][1]) && (twoDiArry[2][1] == twoDiArry[2][2]) && (twoDiArry[2][2]!= '')){
        count++;
        winner = twoDiArry[2][0];
    }
    //for vertical wins
    if((twoDiArry[0][0] == twoDiArry[1][0]) && (twoDiArry[1][0] == twoDiArry[2][0]) && (twoDiArry[2][0]!= '')){
        count++;
        winner = twoDiArry[0][0];
    }
    if((twoDiArry[0][1] == twoDiArry[1][1]) && (twoDiArry[1][1] == twoDiArry[2][1]) && (twoDiArry[2][1] != '')){
        count++;
        winner = twoDiArry[0][1];
    }
    if((twoDiArry[0][2] == twoDiArry[1][2]) && (twoDiArry[1][2] == twoDiArry[2][2]) && (twoDiArry[2][2] != '')){
        count++;
        winner = twoDiArry[0][2];
    }
    //for diagnol wins
    if((twoDiArry[0][0] == twoDiArry[1][1]) && (twoDiArry[1][1] == twoDiArry[2][2]) && (twoDiArry[2][2] != '')){
        count++;
        winner = twoDiArry[0][0];
    }
    if((twoDiArry[0][2] == twoDiArry[1][1]) && (twoDiArry[1][1] == twoDiArry[2][0]) && (twoDiArry[2][0] != '')){
            count++;
            winner = twoDiArry[0][2];
    }
    console.log('count' + count);
    if(count > 1)
        return 'Invalid result';
    if(count == 1)
        return  winner + ' is the winner';
    
    //test if there are empty string in the array
    let complete = (twoDiArry.join().replace(/,/g, "").length == 9)?true:false;
    console.log(twoDiArry.join().replace(/,/g, ""));
    if((count == 0) && !complete)
        return 'Game in progress, no winner yet';
    if((count == 0) && complete)
        return 'Tie game';
}

console.log(tictactoe([['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']]))
console.log(tictactoe([['X', '', 'X'], ['O', '', ''], ['', 'O', '']]))
console.log(tictactoe([['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']]));
module.exports = {tictactoe}