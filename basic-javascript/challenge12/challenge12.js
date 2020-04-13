
/* Create a function which takes a 3x3 
2-dimensional array. Validate that each 
array index holds only a value of “X”, “O”, 
or an empty string. Have the function
evaluate a game of tic tac toe represented 
by the 2D array.  Should have a result
for a tie, each winner, or an invalid game.
*/


tictactoe = (board) => {
//console.log(arr[1][2])
let winX = false;
let winO = false;
let blank = false;
for (i=0; i<3; i++){
    for (j=0; j<3; j++){
        if(board[i][j] != 'X' && 
           board[i][j] != 'O' &&
           board[i][j] !='')           
           return 'Invalid Only Xs and Os are allowed in the board'
           if(board[i][j] == '') blank = true;
        }
        
}
//Checking columns and rows for winners
for (i=0; i<3; i++) 
{ 
    if (board[i][0] == 'X' && 
        board[i][1] =='X' &&  
        board[i][2] == 'X') 
        winX = true;            
    if (board[0][i] == 'X' && 
        board[1][i] =='X' &&  
        board[2][i] == 'X') 
        winX = true;

    if (board[i][0] == 'O' && 
        board[i][1] =='O' &&  
        board[i][2] == 'O') 
        winO = true;            
    if (board[0][i] == 'O' && 
        board[1][i] =='O' &&  
        board[2][i] == 'O') 
        winO = true;
} 
//checking diagonals for winners
if (board[0][2] =='X' && 
    board[1][1] == 'X' && 
    board[2][0] == 'X') 
    winX = true;
if (board[0][0] =='X' && 
    board[1][1] == 'X' && 
    board[2][2] == 'X') 
    winX = true;

if (board[0][2] =='O' && 
    board[1][1] == 'O' && 
    board[2][0] == 'O') 
    winO = true;
if (board[0][0] =='O' && 
    board[1][1] == 'O' && 
    board[2][2] == 'O') 
    winO = true;

if(winO == true && winX == true) 
return 'Invalid result'
if(winX == true) return 'X is the winner';
if(winO == true) return 'O is the winner';
if(blank == true) return 'Game in progress, no winner yet';
return 'Tie';

}
console.log(tictactoe([['O', 'X', 'O'], 
          ['O', 'X', 'O'], 
          ['O', 'X', 'X']]));