function lookingAtFirstChara(string) {
  //Checking to make sure that the provided string is a string
  if (typeof string != "string") {
    throw Error("Not valid type");
  }

  //Makes the whole string lower case
  string = string.toLowerCase();

  //gets the first character of the string
  firstCharacter = string[0];

  //Checks to see which group the first character belongs to
  if (
    firstCharacter == "a" ||
    firstCharacter == "e" ||
    firstCharacter == "i" ||
    firstCharacter == "o" ||
    firstCharacter == "u"
  ) {
    return "A";
  } else if (
    firstCharacter == "b" ||
    firstCharacter == "c" ||
    firstCharacter == "d" ||
    firstCharacter == "f" ||
    firstCharacter == "g"
  ) {
    return "B";
  } else if (
    firstCharacter == "h" ||
    firstCharacter == "j" ||
    firstCharacter == "k" ||
    firstCharacter == "l" ||
    firstCharacter == "m"
  ) {
    return "C";
  } else if (
    firstCharacter == "n" ||
    firstCharacter == "p" ||
    firstCharacter == "q" ||
    firstCharacter == "r" ||
    firstCharacter == "s" ||
    firstCharacter == "t" ||
    firstCharacter == "v" ||
    firstCharacter == "x" ||
    firstCharacter == "y" ||
    firstCharacter == "z"
  ) {
    return "D";
  } else {
    return "E";
  }
}

//Export information
module.exports = {
  lookingAtFirstChara,
};
