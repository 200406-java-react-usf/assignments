/**
 * JavaScript Assignment #9
 * By: Mohamed Aboulela
 * Purpose: Write a function to find the longest string from a given array of strings and returns the string’s array index.
 */

var rando = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var cars = ["Volvo", "BMW", "Ford", "Mazda"];


function longestString(arr){
  var long1= [];
  for (i=0; i<arr.length; i++){
      if (arr[i].length > long1){
        long1= arr[i].length;
      }

  }
  return long1;
}

console.log(longestString(rando));
console.log(longestString(cars));

module.exports = 
  longestString