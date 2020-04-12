function verifyEmail(email) {
    if (typeof(email) != 'string') { return ("input is invalid") };

    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (format.test(email))
        return true;
    else
        return false;
}
module.exports = {
    verifyEmail
}