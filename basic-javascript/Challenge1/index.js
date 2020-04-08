const date = new Date();
let isLeapYear = function (date)
{
    let x = date.getFullYear();
    if ((x % 4 === 0) && (x % 100 === 0) && (x % 400 === 0))
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

if (isLeapYear)
{
    console.log(date.getFullYear() + " is a leap year");
}
else
{
    console.log(date.getFullYear() + " is not a leap year");
}