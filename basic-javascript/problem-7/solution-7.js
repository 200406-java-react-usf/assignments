const fibonacci = (num) => {
    if(typeof num !== 'number') throw Error ('You did not send me a valid number');
    if(num < 0) return -1;

    let lastNum = 1;
    let twoNumsAgo = 0;
    let currentNum = 1;
    for(let i=2; i<=num; i++){
        currentNum = lastNum + twoNumsAgo;
        twoNumsAgo = lastNum;
        lastNum = currentNum;

    }
    return currentNum;
}


module.exports = {
    fibonacci
}