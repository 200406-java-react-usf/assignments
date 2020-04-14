//Write a function that adds the values of arrays, even if the arrays are different sizes. 
function addArr(arr1, arr2){  
    let result = [];
    let count = 0;

   while (count < arr1.length && count < arr2.length) 
    {
      result.push(arr1[count] + arr2[count]);
      count++;
    }
  
   if (count === arr1.length) 
   {
      for (let i = count; i < arr2.length; i++)   {
        result.push(arr2[i]);
      }
    } 
    else
    {
    for (i = count; i < arr1.length; i++) 
      {
        result.push(arr1[i]);
      }
    }
    return result;
  }
console.log('Challenge 8: Adds the values of arrays, even if the arrays are different sizes')
console.log(addArr([1,2,3], [3,2,1]));
console.log(addArr([1,2,3,4,5], [1,2,3]));
module.exports = addArr;