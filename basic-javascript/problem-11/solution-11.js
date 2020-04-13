const equivArr = (array1, array2) => {

    if(typeof array1 !== typeof [] || typeof array2 !== typeof []) throw Error ('You did not sent me two arrays');
    if(array1.length !== array2.length) return false;

    array1.sort();
    array2.sort();
    
    for(let i=0; i<array1.length; i++){
        if(array1[i] !== array2[i]) return false;
    }
    return true;

}


module.exports = {
    equivArr
}