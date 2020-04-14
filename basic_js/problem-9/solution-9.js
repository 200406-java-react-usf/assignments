function longString (arr, onComplete, onError) {
    if (!Array.isArray(arr)){
        onError('Input is not an array.');
    }
    else {
        let i =0;
        let length = 0;
        while(i < arr.length){
            if (arr[i].length> length){
                index = i;
                length = arr[i].length;  
            }
            i++;
        }
        onComplete(index);
    }
}

module.exports = {
    longString
}
//a=['this', 'is', 'an', 'array'];
//longString(a, val => console.log(val), () => {});
 //longString(a, ()=>{}, err => console.log(err));
