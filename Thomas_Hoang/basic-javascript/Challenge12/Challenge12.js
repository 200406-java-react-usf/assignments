//Create a function which takes a 3x3 2-dimensional array.
//  Validate that each array index holds only a value of “X”, “O”, or an empty string.
//   Have the function evaluate a game of tic tac toe represented by the 2D array.  
//   Should have a result for a tie, each winner, or an invalid game.

//Create a function which takes a 3x3 2-dimensional array.
//  Validate that each array index holds only a value of “X”, “O”, or an empty string.
//   Have the function evaluate a game of tic tac toe represented by the 2D array.  
//   Should have a result for a tie, each winner, or an invalid game.

// function ticTacToe(input){
//     //puts the input game status into a non-multidimensional array
//     const game = input[0].concat(input[1], input[2])
//     //All of the possible win conditions
//     const winConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ]

//     //Checks the condition of the game
//     for (i = 0; i < winConditions.length; i++){

//         let a = game[winConditions[i][0]]
//         let b = game[winConditions[i][1]]
//         let c = game[winConditions[i][2]]
//         console.log(i)
//     //     //Checks if x is the Winner
//     //     if (a === 'x' & b === 'x' & c ==='x'){
//     //         console.log("X is the winner")
//     //     //If o is Winner
//     //     }else if (a === 'o' && b === 'o' && c ==='o'){
//     //         console.log("O is the winner")
//     //     // If game is in progress after it has checked all of the win conditions
//     //     }else if (i == winConditions.length && (game[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(''))){
//     //         console.log("The game is still in progress")
//     //     //If it is a tie
//     //     }else 
//     //         console.log("It's a tie")
//     }
// }

// x0 = [['o', 'o', 'o'], ['x', 'x', 'x'], ['x', 'x', 'x']]
// // x1 = [[]]
// ticTacToe(x0)

function ticTacToe(input){
    //puts the input game status into a non-multidimensional array
    const game = input[0].concat(input[1], input[2])
    //All of the possible win conditions
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ] 
    
        var xWins = false;
        var oWins = false;
    //Checks the condition of the game
    for (i = 0; i < winConditions.length; i++){
        let a = game[winConditions[i][0]]
        let b = game[winConditions[i][1]]
        let c = game[winConditions[i][2]]
        //Checks if x is the Winner
        if (a === 'x' & b === 'x' & c ==='x'){
            xWins = true;
            console.log(xWins)
            continue
        //Checks if o is the Winner
        }else if (a === 'o' & b === 'o' & c ==='o'){
            oWins = true;
            continue
        // If game has two winners
        }else if ((xWins === true) && (oWins === true)){
            return('Invalid Game')
        //If it is a tie
        }else if ((i == winConditions.length - 1) & (game.indexOf('') === -1)){
            return('It\'s a tie')
        //Annouces if x or o is the winner after all win conditions have been checked
        }else if ((i == (winConditions.length - 1)) & xWins === true & oWins === false) {
            return('X is the winner')
        }else if (i == (winConditions.length - 1) & oWins === true & xWins === false) {
            return('O is the winner')
        }else if ((game.indexOf('') !== -1) & oWins === false & xWins === false){
            return('The game is still in progress')
        }
    }
}
module.exports = ticTacToe;
x0 = [['o', 'x', 'o'], ['x', 'x', 'o'], ['x', 'o', 'x']]
ticTacToe(x0)