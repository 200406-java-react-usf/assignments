/**Basic JavaScript Challenge 2
 * 
 * by Kennedy Wandelt
 * 
 * Contains a function which checks for a valid email format
 * Assumptions: valid email format is as follows <str1>@<str2>.<str3> where 
 *  -   <str1> is any string which can contain letter, number, and underscore, dashes, or periods 
 *      as long as there are flanked by at least one letter or number
 *  -   <str2> is the first part of a valid domain containing letters, numbers, or dashes 
 *      following an '@' symbol and followed by a '.'
 *  -   <str3> is the final part of a valid domain which follows '.' and must contain at least 2 characters
 * 
**/

function isValidEmail(email) {

    //tests to see if input is a string
    if(typeof(email) !== "string") throw "Input is not valid";

    //regex basically says (numbers letters and )@().()
    const emailFormat = /^(\w+)*@(\w+)*(\.\w{2,3})+$/;

    //checking agains format above
    if(emailFormat.test(email)) return true;
    else return false;
}

module.exports = {
    isValidEmail
}