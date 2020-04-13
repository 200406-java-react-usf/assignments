/* Write a function that adds the values 
of arrays, even if the arrays are different sizes. 

	addArr([1,2,3], [3,2,1]) = [4,4,4]
	addArr([1,2,3,4,5], [1,2,3]) = [2,4,6,4,5]
 */

 AddArray = (arr1, arr2) => {
    if(!Array.isArray(arr1)) throw(`${arr1} is not an array`);
    if(!Array.isArray(arr2)) throw(`${arr2} is not an array`);
     let len = arr1.length;
     let arr3 = arr2;

     if (arr1.length > arr2.length) {
         len = arr2.length;
         arr3 = arr1;
     }

     for(i = 0; i < len; i++) {
         arr3[i] = arr1[i] + arr2[i];
     }

     return arr3;
 }
 module.exports ={ 
     AddArray
 }
 console.log(AddArray([4, 5, 6], [3, 2, 1, 7]));