function equalArrays(arr1, arr2, onComplete, onError) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)){
        onError('One or more inputs is not an array.')
    }

    else if (arr1.length != arr2.length) {
        onError('Arrays are not the same length')
    }

    else {
        let index = 0;
        for(i=0; i < arr1.length; i++){
            index = arr2.indexOf(arr1[i])
            if (index != -1){
                arr2.splice(index,1);
            }
        }
        if(arr2.length < 1){
            onComplete(true)
        }
        else{
            onComplete(false)
        }
    }

}

module.exports ={
    equalArrays
}