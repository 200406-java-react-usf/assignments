function equivArr(arr1,arr2){
 let testArr = arr1.forEach((e1) => arr2.some((e2) => e1 == e2) )
    if (arr1.length !== arr2.length){
        return false;
        }  
    if(arr1.forEach((e1) => arr2.some((e2) => e1 == e2) )){
        return  true;
        }
      else if(arr1.forEach((e1) => arr2.some((e2) => e1 != e2) )){
          return false;
        } else {return "bad"}

};

console.log(testArr)
console.log(equivArr([1,2,3,5,6,7],[2,1,3,7,6,5]));