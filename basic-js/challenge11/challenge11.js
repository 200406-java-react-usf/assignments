function equivArr(arr1,arr2){

if (arr1.length !== arr2.length){
  return false;
  }
else{
 for(i=0;i<arr1.length&&arr2.length;i++){
   arr2.some((e2) => arr1[i]==e2)
   return true;
 }};
}


module.exports = equivArr

