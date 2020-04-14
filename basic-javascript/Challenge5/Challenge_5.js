//Write a function that takes in a string and a number as parameters and implements a Caesar Shift encryption.

function isUpperCase(input) {
    return input === input.toUpperCase();
}

function Caesar(input, number)
{
let cipher = " ";
 for (let i=0; i < input.length; i++){
    if(isUpperCase(input[i])){
        //String.fromCharCode() method returns a string created from the specified sequence
        //input.charCodeAt(i) returns the code of the first character in a string (indexing)
        cipher += String.fromCharCode((input.charCodeAt(i) + number - 65) % 26 + 65);
      }
      else
      {
     
        cipher += String.fromCharCode((input.charCodeAt(i) + number - 97) % 26 + 97);
      }
    }
    return cipher
}
    console.log("Challenge 5: Caesar Shift encrption")
    console.log(Caesar('ONCEAGAIN', 12));

module.exports = Caesar;



   
