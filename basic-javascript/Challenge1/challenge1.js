const date = new Date().getFullYear();
const isLeapYear = function (date)
{
    if ((date % 4 === 0) && (date % 100 !== 0) || (date % 400 === 0))
    {
        return true;
    }
    else
    {
        return false;
    }   
};


module.exports = 
{
    isLeapYear
};