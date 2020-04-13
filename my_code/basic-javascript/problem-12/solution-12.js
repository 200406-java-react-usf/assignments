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
    let Xwin = false; 
    let Owin = false;
    let doubleWin = false;

    for (x=0;x<input.length;x++){
        let row = input[x];
        for(y=0;y<row.length;y++){
            if (row[y] !=='X' && row[y] !=='O' && row[y] !==''){
                return 'Invalid Character On Board';
                break;           
            } 
            if(row[y] =='X') {
                let checkWinX = [x,y];
                validateX.push(checkWinX);               
            }else{
                let checkWinO = [x,y];
                validateO.push(checkWinO);
            }
        }
        // Checking for X row win
        if(row[0] == 'X' && row[1]== 'X' && row[2]=='X'){
            Xwin = true;
        }
        // Checking for O row win
        if(row[0] == 'O' && row[1]== 'O' && row[2]=='O'){
            Owin = true;
        }
    }
    let row1 = input[0]; 
    let row2 = input[1]; 
    let row3 = input[2]; 

    // Checking for X column win
    if (row1[0]=='X' && row2[0]== 'X' && row3[0]=='X'){
        Xwin = true;
    }
    if (row1[1]=='X' && row2[1]=='X' && row3[1]=='X'){
        Xwin = true;
    }
    if (row1[2]=='X' && row2[2]=='X' && row3[2]=='X'){
        Xwin = true;
    }
    // Checking for O column win
    if (row1[0]=='O' && row2[0]== 'O' && row3[0]=='O'){
        Owin = true; 
    }
    if (row1[1]=='O' && row2[1]=='O' && row3[1]=='O'){
        Owin = true;
    }
    if (row1[2]=='O' && row2[2]=='O' && row3[2]=='O'){
        Owin = true;
    }
    //Checking for diagonal wins
    if (row1[0]=='X' && row2[1]=='X' && row3[2]=='X'){
        Xwin = true;
    }
    if (row1[0]=='O' && row2[1]=='O' && row3[2]=='O'){
        Owin = true;
    }
    if (row1[2]=='X' && row2[1]=='X' && row3[0]=='X'){
        Xwin = true;
    }
    if (row1[2]=='O' && row2[1]=='O' && row3[0]=='O'){
        Owin = true;
    }
    // Check for double win
    if (Xwin == true && Owin == true){
        return 'Invalid Result';
        doubleWin = true;
    }
    // Announce winner
    if(Xwin == true && doubleWin == false){
        return 'X is the winner';
    }
    if(Owin == true && doubleWin == false){
        return 'O is the winner';
    }else{
        return 'Game in progress, no winner yet';
    }
}
// ticTacToe(gameBoard_1);
// const gameBoard_1 = [['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']];
// const gameBoard_2 = [['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']];
// const gameBoard_3 = [['', 'O', 'X'], ['X', 'O', ''], ['', 'O', 'X']];
// const gameBoard_4 = [['X', '', 'X'], ['O', '', ''], ['', 'O', '']];
// const gameBoard_5 = [['a', '', 'X'], ['O', '', ''], ['', 'O', '']];

module.exports=ticTacToe;
