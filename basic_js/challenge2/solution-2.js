/** 
 * Problem 2: Create a function that checks for a valid email format.
 */

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test)
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

let inputEmail = 'peters.drew.dp@gmail.com'
console.log(validateEmail(inputEmail));

module.exports = {
    validateEmail
};