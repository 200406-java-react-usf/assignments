const stringPresent = (givenString) =>
{
    if (givenString.includes('test'))
    {
        let newString = givenString.replace(/test/g, '');
        return newString;
    }
    else return givenString;
}

console.log(stringPresent('hello test world i love test you, you suck test'));


module.exports = 
{
    stringPresent
}