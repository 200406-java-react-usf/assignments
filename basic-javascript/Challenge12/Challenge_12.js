/*
Create a function which takes a 3x3 2-dimensional array. 
Validate that each array index holds only a value of “X”, “O”, or an empty string. 
Have the function evaluate a game of tic tac toe represented by the 2D array.  
Should have a result for a tie, each winner, or an invalid game.
*/
function TicTactoe {
board[rowNumber][columnNumber] = player;
enum Cell {E, X, O};
   Cell [][] board;
   board = new cell[3][3];
   for(let i = 0; i < board.length; i++){
    for(let i = 0; i < board.[i]; i++){

        board[i][j] = Cell.E;
    }
   }
   for result ""
   for (Cell[] row : board){
       for (Cell c : row){
           result += c;
       }
       result += "\n";
   }
   return result;
}
module.exports = TicTacToe