//A function to check for the string 'test' and remove it
function checkForTest(string) {
  //Checking to make sure that the provided string is a string
  if (typeof string != "string") {
    throw Error("Not valid type");
  }

  //To convert the string into lower cases.
  //Prefer method over checking for all different versions
  //Such as Test, tEst, teSt, tesT
  //The downfall is that we cannot undo this
  //so all results will be return as lower case.
  string = string.toLowerCase();

  //Initialize the starting point
  let i = 0;

  //The while look will look at every index of the string
  //If a test is found it will be remove
  //This allows to remove multiple 'test' found in the string
  while (i <= string.length) {
    //This function checks the string for any test
    //If -1 is return the string does not have any test
    if (string.indexOf("test") === -1) {
      return string;
      break;
    } else {
      //replacing the 'test' with '' by using .replace
      string = string.replace("test", "");
      //The ++ increases the index by one
      i++;
    }
  }
}

//Exports the information
module.exports = {
  checkForTest,
};
