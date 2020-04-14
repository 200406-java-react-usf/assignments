/*
  Regular Expression Pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  The regular expression pattern is used to examine email address. 
  Each part of the regular expression pattern check for different requirements.
  The source can be found at this website: https://www.w3resource.com/javascript/form/email-validation.php

  Everything before the @ symbol accepts the following:
   - uppercase and lowercase
   - digits (0-9) and special characters (!, #,%,$...etc)
*/

function validEmailCheck(email) {
  //storing the regular expression pattern into a variable
  let regularExpressionPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //Checking to make sure that the provided email is a string
  if (typeof email != "string") {
    throw Error("Not valid type");
  }
  //Testing the email and returning if it is valid or not
  if (regularExpressionPattern.test(email)) {
    return "The email provided has been accepted.";
  } else {
    return "The email provided is incorrect.";
  }
}

//Exports the functions to the test class
module.exports = {
  validEmailCheck,
};
