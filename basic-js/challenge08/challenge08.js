function addArr(arr1,arr2){
let i = 0;
let sum = []




if (arr1.length > arr2.length){
    let arr2long = arr2.concat(Array(arr1.length - arr2.length).fill(0))
    for(i=0;i<(arr1.length);i++){

        sum.push(arr1[i]+arr2long[i])
    
     }return sum;}

    
else if(arr2.length > arr1.length){
    let arr1long = arr1.concat(Array(arr2.length - arr1.length).fill(0))
    for(i=0;i<(arr2.length);i++){

        sum.push((arr1long[i]+arr2[i]))
    
     }return sum;}
    
else{ for(i=0;i<(arr1.length);i++){

    sum.push(arr1[i]+arr2[i])

 }return sum;}


}



module.exports = addArr
