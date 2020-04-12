const validateEmail = (email) => 
{
    let emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailExpression.test(email))
    {     
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = 
{
    validateEmail
};
