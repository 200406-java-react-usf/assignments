const addArr = (array1, array2) => {

    if(typeof array1 !== typeof [] || typeof array2 !== typeof []) throw Error ('You did not send me valid data.');
    if(array1 === [] && array2 === []) throw Error ('You sent me two empty arrays!');


    let newArr = [];

    for(let i=0; i<array1.length; i++){
        if(typeof array1[i] !== 'number') throw Error ('These are supposed to be numbers');
        newArr[i] = array1[i];
    }
    
    for (let x=0; x<array2.length; x++){
        if(typeof array2[x] !== 'number') throw Error ('These are supposed to be numbers');
        newArr[x] = newArr[x] + array2[x];  
    }
    return newArr;

}


module.exports = {
    addArr
}