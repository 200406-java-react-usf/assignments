/**
 * Problem 8: Write a function that adds the values of arrays, even if the arrays are different sizes. 
 */

const addArray = (arr1, arr2) => {

    if(typeof arr1 !== typeof [] || typeof arr2 !== typeof []) throw Error ('You did not send valid data, please input numbers.')
    if(arr1 === [] && arr2 === []) throw Error ('You sent two empty arrays.')

    let newArr = []
    for(let x=0; x<arr1.length; x++){
        if(typeof arr1[x] !== 'number') throw Error ('These are supposed to be numbers')
        newArr[x] = arr1[x]
    }
    for (let y=0; y<arr2.length; y++){
        if(typeof arr2[y] !== 'number') throw Error ('These are supposed to be numbers')
        newArr[y] = newArr[y] + arr2[y]
    }
    return newArr;
}

module.exports = {
    addArray
}