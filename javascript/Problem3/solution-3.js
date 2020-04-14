/**
 * JavaScript Assignment #3
 * By: Mohamed Aboulela
 * Purpose: Write a function to remove a character at the specified position of a given string and return the new string.
 */

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }



console.log(remove_character("CudaC++",0));
console.log(remove_character("CudaC++",3));
console.log(remove_character("CudaC++",5));

module.exports = 
 remove_character;