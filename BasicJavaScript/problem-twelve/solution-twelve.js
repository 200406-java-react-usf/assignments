const ticTacToe = (input) => {

    let xWins = false;
    let oWins = false;

    //naming each part of the board
    let topLeft = input[0][0];
    let topMid = input[0][1];
    let topRight = input[0][2];
    let midLeft = input[1][0];
    let midMid = input[1][1];
    let midRight = input[1][2];
    let botLeft = input[2][0];
    let botMid = input[2][1];
    let botRight = input[2][2];


    // checking for blank spots on the board

    let hasBlanks = false;

    for (let i = 0; i < input.length; i++){

        for (let j = 0; j < input[i].length; j++){

            if (input[i][j] !== 'X' && input[i][j] !== 'O' && input[i][j] !== '') throw Error('Character other than X,O, or blank spot');

            if(input[i][j] === ''){

                hasBlanks = true;

            }

        }

    }

    //check for win conditions - 8 of them

    //1 - top row
    if (topLeft === topMid && topMid === topRight){

        if(topLeft === 'X'){ xWins = true;}
        else if (topLeft === 'O'){ oWins = true;}

    }

    //2 - bottom row
    if(botLeft === botMid && botMid === botRight){

        if(botLeft === 'X'){ xWins = true;}
        else if (botLeft === 'O'){ oWins = true;}

    }

    //3 middle row
    if(midLeft === midMid && midMid === midRight){

        if(midLeft === 'X'){ xWins = true;}
        else if (midLeft === 'O'){ oWins = true;}

    }

    //4 - diagonal starting at top left
    if (topLeft === midMid && midMid === botRight){

        if(topLeft === 'X'){ xWins = true;}
        else if (topLeft === 'O'){ oWins = true;}

    }

    //5 - diagonal starting at top right
    if(topRight === midMid && midMid === botLeft){

        if(topRight === 'X'){ xWins = true;}
        else if (topRight === 'O'){ oWins = true;}

    }

    //6 - middle column
    if(topMid === midMid && midMid === botMid){

        if(topMid === 'X'){ xWins = true;}
        else if (topMid === 'O'){ oWins = true;}

    }

    //7 - left column
    if(topLeft === midLeft && midLeft === botLeft){

        if(topLeft === 'X'){ xWins = true;}
        else if (topLeft === 'O'){ oWins = true;}

    }

    //8 - right column
    if(botRight === midRight && midRight === topRight){

        if(topRight === 'X'){ xWins = true;}
        else if (topRight === 'O'){ oWins = true;}

    }

    //check outcomes of the game
    if(xWins && oWins){

        return 'Invalid Result';

    } else if ((!xWins && !oWins) && hasBlanks){

        return 'Game in progress';

    } else if ((!xWins && !oWins) && !hasBlanks){

        return 'There was a tie';

    } else if (xWins){

        return 'X is the winner';

    }else if (oWins){

        return 'O is the winner';

    }

}

let testInput = [['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']];

console.log(ticTacToe(testInput));

module.exports = {

    ticTacToe

}