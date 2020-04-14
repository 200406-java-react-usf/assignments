//Write a function to find the longest string from a given array of strings and returns the string’s array index.
let list = ["Success", "Deterimination", "Endurance", "Drive"];
function longString(arr)
{
  let l1 ="";
    for (i = 0; i < arr.length; i++){
        if (arr[i].length > l1){
        l1= arr[i].length;
        }
    }
    return l1;
  }
console.log ("Challenge 9: Find the longest string from a given array of strings")
console.log(longString(list));
module.exports = longString;