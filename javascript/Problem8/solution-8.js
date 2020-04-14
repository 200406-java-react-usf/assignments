/**
 * JavaScript Assignment #8
 * By: Mohamed Aboulela
 * Purpose: Write a function that adds the values of arrays, even if the arrays are different sizes.
 */

function addArr(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(addArr([1,2,3], [3,2,1]));
console.log(addArr([1,2,3,4,5], [1,2,3]));

module.exports = 
  addArr;