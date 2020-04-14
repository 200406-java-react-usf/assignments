//This function counts all the vowels in the provided string
function countVowels(string) {
  //Checking to make sure that the provided string is a string
  if (typeof string != "string") {
    throw Error("Not valid type");
  }

  //Set our counter to 0;
  let count = 0;

  //Use a for loop to compare each character in the string to a vowel
  //If the characters are equal, than we add one to the counter
  for (let i = 0; i <= string.length - 1; i++) {
    //if statement that compares each character to each vowel
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      //Increases the counter by one
      count++;
    }
  }
  return "There are " + count + " vowels.";
}

//Exports information
module.exports = {
  countVowels,
};
