const validateEmail = (email) => {
    if (typeof email !== 'string') throw Error ('You did not send me a valid email address');
    if (email === '') throw Error ('You did not send me anything');

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    
}

console.log(validateEmail('spthoms19@gmail.com'));
console.log(validateEmail('cantnow@yahoo.com.com.com'));



module.exports = {
    validateEmail
}
