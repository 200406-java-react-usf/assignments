const isValid = (char) => 
{
    if (char === 'O' || char === 'X' || char === '') return true;
    else return false;
}

const ticTacToe = (twoDimArr) => 
{
    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            if(twoDimArr[i][j] != 'X' && twoDimArr[i][j] != 'O' && twoDimArr[i][j] !='')         
            return 'Invalid input, only X and O allowed as input'
            else return 'good job'
        }
    };

    // const winComb = [
    //     [0, 1, 2], // checking first row
    //     [3, 4, 5], // checking second row
    //     [6, 7, 8], // checking third row
    //     [0, 3, 6], // checking first column
    //     [1, 4, 7], // checking second column
    //     [2, 5, 8], // checking third column
    //     [0, 4, 8], // checking first diagonal
    //     [2, 4, 6]  // checking second diagonal
    // ];

    // const isWin = (twoDimArr) =>
    // {
    //     for (let i = 0; i < 8; i++)
    //     {
    //         if (twoDimArr[winComb[i][0]] === 'X' 
    //          && twoDimArr[winComb[i][1]] === 'X' 
    //          && twoDimArr[winComb[i][2]] === 'X') 
    //          return true;
    //     }

    //     for (let i = 0; i < 8; i++)
    //     {
    //         if (twoDimArr[winComb[i][0]] === 'O' 
    //          && twoDimArr[winComb[i][1]] === 'O' 
    //          && twoDimArr[winComb[i][2]] === 'O') 
    //          return true;
    //     }

    //     return false;
    // }
    

    
}
console.log(ticTacToe([['X', 'X', 'X'], ['0', 'O', 'O'], ['X', 'O', 'X']]));



module.exports = 
{
    ticTacToe
};