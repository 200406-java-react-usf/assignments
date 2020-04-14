function equivArr(arr1,arr2){

    if (arr1.length !== arr2.length){
        return false
    } else if(arr1.every((e1) => e1==arr2[e1] )){
        return  true;
        };
};


console.log(equivArr([1,2,3,5,6,71],[2,1,3,7,6,5]));