/**
 * JavaScript Assignment #2
 * By: Mohamed Aboulela
 * Purpose: Create a function that checks for a valid email format.
 */

function EmailFormat(email) {
    if (email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    else {
        console.log("invalid email address")
        return false;
    }
}


module.exports = 
    EmailFormat;
