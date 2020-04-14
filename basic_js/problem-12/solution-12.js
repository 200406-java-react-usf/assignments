function ticTacToe(arr, onComplete, onError) {
    if (!Array.isArray(arr)){
        onError('Input is not an array.')
    }
    else{
        onComplete('')
    }
}

module.exports = {
    ticTacToe
}