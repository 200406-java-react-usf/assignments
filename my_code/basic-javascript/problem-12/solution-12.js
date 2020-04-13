/*
    Basic JavaScript Assignment
    Problem #12

    Korey Keipe

    12.)Create a function which takes a 3x3 2-dimensional array. Validate that each array index holds only a value of “X”, “O”, or an empty string. 
    Have the function evaluate a game of tic tac toe represented by the 2D array.  Should have a result for a tie, each winner, or an invalid game.

        tictactoe([[‘X’, ‘X’, ‘X’], [‘O’, ‘O’, ‘O’], [‘X’, ‘O’, ‘X’]]) 
        prints “Invalid result”

        tictactoe([[‘X’, ‘O’, ‘X’] ,[‘O’, ‘X’, ‘O’], [‘X’, ‘O’, ‘X’]])
        Prints “X is the winner”

        tictactoe([[‘’, ‘O’, ‘X’] , [‘X’, ‘O’, ‘’], [‘‘, ‘O’, ‘X’]]) 
        Prints “O is the winner”

            tictactoe([[‘X’, ‘’, ‘X’], [‘O’, ‘’, ‘’], [‘’, ‘O’, ‘’]]) 
        Prints “Game in progress, no winner yet”
*/

let ticTacToe = (input) => {

    let validateX = [];
    let validateO = [];

    for (x=0;x<input.length;x++){
        let row = input[x];
        for(y=0;y<row.length;y++){
            if (row[y] !=='X' && row[y] !=='O' && row[y] !==''){
                return 'Invalid Character On Board';
                break;           
            }

            if(row[y] =='X') {
                //console.log([x,y]);
                let checkWinX = [x,y];
                validateX.push(checkWinX);                 
            }else{
                let checkWinO = [x,y];
                validateO.push(checkWinO);
            }
        }
    }  

    // console.log('X Validate');
    // console.log(validateX.sort());

    // console.log('O Validate');
    // console.log(validateO);
    
}
const gameBoard_1 = [['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']];
const gameBoard_2 = [['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']];
const gameBoard_3 = [['', 'O', 'X'], ['X', 'O', ''], ['', 'O', 'X']];
const gameBoard_4 = [['X', '', 'X'], ['O', '', ''], ['', 'O', '']];
const gameBoard_5 = [['a', '', 'X'], ['O', '', ''], ['', 'O', '']];
ticTacToe(gameBoard_2);

module.exports=ticTacToe;