function addArr(arr1, arr2, onError){
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        onError('Bad array request');
        return;
      }
    // get the longer array
    function compareArr(arr1, arr2){
    if (arr1.length>=arr2.length){
        return [arr1, arr2];
    }else{
        return [arr2, arr1];
    }}
    let longArr = compareArr(arr1, arr2)[0];
    let shortArr = compareArr(arr1, arr2)[1];
    for(i=0; i<=longArr.length-1; i++){
        if(i<=shortArr.length-1){
        longArr[i] = longArr[i] + shortArr[i];
        }
    }
  return longArr;
}

module.exports = addArr;