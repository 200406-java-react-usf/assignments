//Caesar shift encryption is a simple encryption that shifts the alphabet
//by a certain index and return a new string

//We are going to create a function that takes in a string and index
function caesarShiftEncryption(string, index) {
  //Checking to make sure that the provided string is a string
  if (typeof string != "string" || typeof index != "number") {
    throw Error("Not valid type");
  }

  //Create an empty array for the encryption
  let encryption = [];

  //Use a for loop that will look at each index in the string
  for (let i = 0; i < string.length; i++) {
    //The alphabet is label from 96 to 122 this if statement checks to
    //see if the index value shifts the string pass 122 and if so
    //it will subtract 122 to set it at the right value
    if (string.charCodeAt(i) + index > 122) {
      //This statement pushes the value into the array encryption using .push
      encryption.push(
        String.fromCharCode(96 + (string.charCodeAt(i) + index - 122))
      );
    } else {
      encryption.push(String.fromCharCode(string.charCodeAt(i) + index));
    }
  }

  //This combines the array into one string using .join
  return encryption.join("");
}

//Export information
module.exports = {
  caesarShiftEncryption,
};
