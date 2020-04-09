function equiArr(arr1, arr2){
    if(arr1.lenght == arr2.lenght){
        let arr1 = arr1.sort();
        let arr2 = arr2.sort();
        for(i = 0; i<=arr1.length-1; i++){
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }
        return true;
    }
}
