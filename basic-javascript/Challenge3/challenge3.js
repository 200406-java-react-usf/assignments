const removeChar = (givenString, index) =>
{
    if (index < 1 || index > givenString.length) 
    {
        return 'Oh no, you gave me bad data';
    }
    
    newString = givenString.slice(0, index - 1) + givenString.slice(index, givenString.length);
    return newString;
}

module.exports = 
{
    removeChar
}
