function sumArrays(arr1, arr2, onComplete, onError) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        onError('One or more inputs is not an array.')
    }
    else if (arr1.some(isNaN) || arr2.some(isNaN)){
        onError('One or more values in the array is not a number')
    }
    
    else {
        let newArray = [];
        const totalLength =  Math.max(arr1.length, arr2.length);
        for (let i = 0; i < totalLength; i++) {
            newArray[i] = (arr1[i] || 0) + (arr2[i] || 0);
        }
        onComplete(newArray);
    }

}

module.exports = {
    sumArrays
}

a = [1,2,3,4,5];
b = [1,2,3,4];
c = [1,'m',2];
d = 1;
sumArrays(a, b, val => console.log(val), ()=>{});
sumArrays(a, c, () => {}, err => console.log(err));
sumArrays(a, d, () => {}, err => console.log(err));
