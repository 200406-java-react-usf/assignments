function tictactoe(input){
    //create a method to compare 2 arrays
    Array.prototype.checkEqual = function (array) {
        for (var i = 0, l=this.length; i < l; i++) {         
            if (this[i] != array[i]) { 
                return false;   
            }           
        }       
        return true;
    }
    function checkWin(check){
        if (check.checkEqual(["X","X","X"])){
            return [0, 1];
        }else if (check.checkEqual(["O","O","O"])){
            return [1, 0];
        }
        else{
            return [0, 0];
        }
    }
    // O for winCount[0], X for winCount[1]
    let winCount = [0, 0]
    //the combination of win positions
    const winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
    let board = input[0].concat(input[1], input[2])
    winCondition.forEach(element => {
        let newcheck = checkWin([board[element[0]], board[element[1]], board[element[2]]]);
        winCount = [winCount[0]+newcheck[0], winCount[1]+newcheck[1]];
    });
    if(board.join("").length === 9){
    if( winCount[0] == 0 && winCount[1] == 0){
        return "Draw"
    }else if(winCount[0] >= 1 && winCount[1] == 0){
        return "O wins"
    }else if(winCount[0] == 0 && winCount[1] >= 1){
        return "X wins"
    }else{
        return "Not Nalid"
    }
    }else{
        return "Game not finished!"
}}

console.log(tictactoe([["O","O", "O"], ["X","X","X"], ["O","O","O"]]));