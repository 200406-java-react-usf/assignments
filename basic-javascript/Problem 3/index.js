const charRemoval = (stringObj, indexLocation) => {
stringObj = new String('Start');
indexLocation = 3    
if(indexLocation <= stringObj.length){
    let removedChar = stringObj.slice(0,(indexLocation))
    let removedChar2 = stringObj.slice((indexLocation + 1), stringObj.length);

    console.log(removedChar + removedChar2)
}
else{
    console.log("Number out of range");
}
}

charRemoval();