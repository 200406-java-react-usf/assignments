function checkIfValidEmail(email) {
    let emailpattern = /\S+@\S+\.(com|net|org|edu|gov)/;
    return (emailpattern.test(email));  
       

}

module.exports = checkIfValidEmail