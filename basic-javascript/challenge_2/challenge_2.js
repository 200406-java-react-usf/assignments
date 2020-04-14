/**Basic JavaScript Challenge 2
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which checks for a valid email format
**/

function isValidEmail(email) {

    //tests to see if input is a string
    if(typeof(email) !== "string") throw "Input is not valid";

    //regex basically says (string)@(string).(2-3 letter string)
    const emailFormat = /^(\w+)*@(\w+)*(\.\w{2,3})+$/;

    //checking agains format above
    if(emailFormat.test(email)) return true;
    else return false;
}

module.exports = {
    isValidEmail
}