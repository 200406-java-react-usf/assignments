function ticTacToe(arr, onComplete, onError) {
    if (!Array.isArray(arr)){
        onError('Input is not an array.')
    }
    
    else {
        //vertical tests
        if (arr[0][0].toUpperCase()==arr[1][0].toUpperCase() && arr[0][0].toUpperCase() == arr[2][0].toUpperCase()) {
            test1=winner(arr[0][0]);
        }
        else {test1 = null};

        if (arr[0][1].toUpperCase()==arr[1][1].toUpperCase() && arr[0][1].toUpperCase()==arr[2][1].toUpperCase()){
            test2=winner(arr[0][1]);
        }
        else test2 = null;

        if (arr[0][2].toUpperCase()==arr[1][2].toUpperCase() && arr[0][2].toUpperCase()==arr[2][2].toUpperCase()){
            test3=winner(arr[0][2]);
        }
        else test3 = null;

        //horizontal tests
        if (arr[0][0].toUpperCase()==arr[0][1].toUpperCase() && arr[0][0].toUpperCase()==arr[0][2].toUpperCase()){
            test4 = winner(arr[0][0]);
        }
        else test4 = null;

        if (arr[1][0].toUpperCase()==arr[1][1].toUpperCase() && arr[1][0].toUpperCase()==arr[1][2].toUpperCase()){
            test5 = winner(arr[1][0]);
        }
        else test5 = null;

        if (arr[2][0].toUpperCase()==arr[2][1].toUpperCase() && arr[2][0].toUpperCase()==arr[2][2].toUpperCase()){
            test6 = winner(arr[2][0]);
        }
        else test6 = null;

        //diagonal tests
        if (arr[0][0].toUpperCase()==arr[1][1].toUpperCase() && arr[0][0].toUpperCase()==arr[2][2].toUpperCase()){
            test7 = winner(arr[0][0]);
        }
        else {test7 = null;}

        if (arr[0][2].toUpperCase()==arr[1][1].toUpperCase() && arr[0][2].toUpperCase()==arr[2][0].toUpperCase()){
            test8 = winner(arr[0][2]);
        }
        else {test8 = null;}

        let board = [test1, test2, test3, test4, test5, test6, test7,test8];
        //console.log(board);
        let val = board.filter(x => x !== null)
        //console.log(val.length);
        
        if (val.length >1 && val[0] !== val[1]){
            onError('Invalid result')
        }
        else if (val.length == 0) {
            if (arr.every(str => str !== '')){
                onComplete('Game in progress, no winner yet')
            }
            else onComplete('Game is tied, no winner')
        }
        else onComplete(val.pop());
    }
}

function winner(str, cb){
    if (str == 'X' || str == 'x') {return 'X is the winner'}
    else if (str == 'O' || str == 'o'){return 'O is the winner'}
    else cb(null)
}

module.exports = {
    ticTacToe
}
// let d = [['X', '', 'X'], ['O', '', ''], ['', 'O', '']];


// let e = [['X', '', 'X'], ['O', '', ''], ['', 'O', '']];
//  console.log(e.length)
//  console.log(e[0].length)
//  console.log(e[1].length)
//  console.log(e[2].length)
//   ticTacToe(e,  val => console.log(val), err => console.log(err))