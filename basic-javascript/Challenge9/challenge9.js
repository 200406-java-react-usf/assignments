const longestStr = (arr) => 
{
    let strLength = 0;
    let returnedStr;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length > strLength)
        {
            strLength = arr[i].length;
            returnedStr = arr[i];
        }
    }
    return returnedStr;
};

module.exports = 
{
    longestStr
}