// Create a function that checks for a valid email format.

function emailValidator(email){

    let str = /\S+@\S+\.\S+/
    return(str.test(email))
}

module.exports = emailValidator;