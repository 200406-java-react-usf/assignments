/* Write a function to find the longest 
string from a given array of strings 
and returns the string’s array index.
 */

 LongString = (strArray) => {
     if(!Array.isArray(strArray)) throw(`${strArray} is not an array`);
     if(strArray.length <=0) throw('The array is empty');
     let str = '';
     let index = 0;
     for (i=0; i<strArray.length; i++){
         if (strArray[i].length > str.length) {
             str = strArray[i];
             index = i;
         }
     }
     //console.log(index);
     return index;     
 }
 module.exports = LongString;
//console.log(LongString(["test", "testing", "this is a test", "test done"]));