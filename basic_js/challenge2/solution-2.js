/** 
 * Problem 2: Create a function that checks for a valid email format.
 */

function emailCheck(email){
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (format.test(email)) {
        return true;
    }
    else {
        return false;};
};

let inputEmail = 'peters.drew.dp@gmail.com'
console.log(emailCheck(inputEmail));

module.exports = emailCheck;