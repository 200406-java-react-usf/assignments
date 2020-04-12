const charRemoval = (stringObj, indexLocation) => {
    // stringObj = new String('Start');
    // indexLocation = 3
    let err = "Number out of range"
    if (indexLocation <= stringObj.length) {
        let removedChar = stringObj.slice(0, (indexLocation))
        let removedChar2 = stringObj.slice((indexLocation + 1), stringObj.length);


        return (removedChar + removedChar2);
    }
    else {
        return err;
    }
}

module.exports = charRemoval;