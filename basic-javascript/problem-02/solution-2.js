/*
    Basic JavaScript Assignment
    Problem #02

    Korey Keipe

    2.) Create a function that checks for a valid email format.
*/

function emailVerification(email){

    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (format.test(email)){
        return true;
    }
    else{
        return false;
    }
}

let inputEmail = 'kkeipe@gmail.com'
console.log(emailVerification(inputEmail));