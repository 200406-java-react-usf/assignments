function addArr(arr1,arr2){
let i;
let sum =[]



if (arr1.length > arr2.length){
    arr2.concat(Array(arr1.length - arr2.length).fill(0))}

else if(arr2.length > arr1.length){
    arr1.concat(Array(arr2.length - arr1.length).fill(0))}

else{ for(i=0;i<(arr1.length&&arr2.length);i++){

    sum[i] = arr1[i]+arr2[i]

 return sum;}}


}

console.log(addArr([1,2],[1,2,3]))