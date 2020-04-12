const equivArr = (arr1,arr2) => {
    if(arr1.length == arr2.length){
        sort1 = arr1.sort();
        sort2 = arr2.sort();
        for(let x = 0; x < sort1.length ; x++){
            if(sort1[x] == sort2[x]){
                continue;
            }
            else{
                return false;
            }
            
        }
         return true;
    }
    return false;
}

module.exports = equivArr;