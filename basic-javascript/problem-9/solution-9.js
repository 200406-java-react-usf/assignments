const longestString = (phrases) => {
    if (typeof phrases !== typeof []) throw Error ('You did not send me an array');

    let longestString = ''
    let longestIndex = 0
    for (let i=0; i<phrases.length; i++){
        if(typeof phrases[i] !== 'string') throw Error ('The list does not contain the correct info');
        if (phrases[i].length > longestString.length) {
            longestString = phrases[i]
            longestIndex = i;
        }
    }
    return longestIndex;
}


module.exports = {
    longestString
}