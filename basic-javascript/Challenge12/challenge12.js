const ticTacToe = (twoDimArr) => 
{
    //Since I'm still very confused about 2dimensional arrays
    //I will not tranverse the array, I will take the values and store them
    //into variables and I will make sure the rows, columns, and diagonals
    //are being checked. 


    /*  
        Imagine this is the 2-dim array
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
    
        These are the winning outcomes
        [0, 1, 2], // represents first row
        [3, 4, 5], // represents second row
        [6, 7, 8], // represents third row
        [0, 3, 6], // represents first column
        [1, 4, 7], // represents second column
        [2, 5, 8], // represents third column
        [0, 4, 8], // represents first diagonal
        [2, 4, 6]  // represents second diagonal
    */

    // First I will check if the argument passed is an array
    // Here we're checking to make sure the array exists
    // And the arrays inside the array also exist
    if (!Array.isArray(twoDimArr) || !Array.isArray(twoDimArr[0])
        || !Array.isArray(twoDimArr[1]) || !Array.isArray(twoDimArr[2]))
    {
        throw new Error ('Incorrect format');
    }

    // Here we make sure the length of the array is 3
    // and the length of the arrays inside the array are 3 as well
    if (twoDimArr.length !== 3 || twoDimArr[0].length !== 3
        || twoDimArr[1].length !== 3 || twoDimArr[2].length !== 3) 
    {
        throw new Error ('Incorrect format');
    }

    //We'll be using this later on to check if there are any blank spaces
    let isBlank = false;

    //Now we'll check if the array contains only 'X' 'O' and '' values
    for (let row = 0; row < twoDimArr.length; row++)
    {
        for (let col = 0; col < twoDimArr.length; col++)
        {
            if (twoDimArr[row][col] != 'X' && twoDimArr[row][col] != 'O' && twoDimArr[row][col] != '')
            throw new Error ('Wrong input, only \'X\' or \'O\' allowed');

            if (twoDimArr[row][col] === '')
            isBlank = true;
        }
    }

    //Now let's assign the array values in variables, like I said before
    let A00 = twoDimArr[0][0];
    let A01 = twoDimArr[0][1];
    let A02 = twoDimArr[0][2];
    let A10 = twoDimArr[1][0];
    let A11 = twoDimArr[1][1];
    let A12 = twoDimArr[1][2];
    let A20 = twoDimArr[2][0];
    let A21 = twoDimArr[2][1];
    let A22 = twoDimArr[2][2];

    //Let's make boolean variables if X wins or O wins
    let xWins = false;
    let oWins = false;
    //Since I'm not going to tranverse the array, get ready for a super long code
    //Here we are checking the 3 rows of the array
    if (A00 === 'X' && A01 === 'X' && A02 === 'X') xWins = true;
    else if (A00 === 'O' && A01 === 'O' && A02 === 'O') oWins = true;

    if (A10 === 'X' && A11 === 'X' && A12 === 'X') xWins = true;
    else if (A10 === 'O' && A11 === 'O' && A12 === 'O') oWins = true;

    if (A20 === 'X' && A21 === 'X' && A22 === 'X') xWins = true;
    else if (A20 === 'O' && A21 === 'O' && A22 === 'O') oWins = true;

    //Here we are checking the first 3 columns of the array
    if (A00 === 'X' && A10 === 'X' && A20 === 'X') xWins = true;
    else if (A00 === 'O' && A10 === 'O' && A20 === 'O') oWins = true;

    if (A01 === 'X' && A11 === 'X' && A21 === 'X') xWins = true;
    else if (A01 === 'O' && A11 === 'O' && A21 === 'O') oWins = true;

    if (A02 === 'X' && A12 === 'X' && A22 === 'X') xWins = true;
    else if (A02 === 'O' && A12 === 'O' && A22 === 'O') oWins = true;

    //Here we are checking the two diagonals
    if (A00 === 'X' && A11 === 'X' && A22 === 'X') xWins = true;
    else if (A00 === 'O' && A11 === 'O' && A22 === 'O') oWins = true;

    if (A02 === 'X' && A11 === 'X' && A20 === 'X') xWins = true;
    else if (A02 === 'O' && A11 === 'O' && A20 === 'O') oWins = true;
    
    //now make sure only X or O won, is they both won, then the board state is invalid
    if (xWins && oWins) return 'The board state is invalid, only 1 player can win';
    else if (!xWins && !oWins && isBlank) return 'Game in progress, no winner yet';
    else if (!xWins && !oWins && !isBlank) return 'It\'s a tie';

    if (xWins) return 'X is the winner';
    else if (oWins) return 'O is the winner';
    
}
    // let arr = [['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22']];
    // console.log(arr[2][1]);

module.exports = 
{
    ticTacToe
};