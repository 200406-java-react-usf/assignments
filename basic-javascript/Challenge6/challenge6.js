const countVowels = (string) => 
{
    let count = 0;
    for (let i = 0; i < string.length; i++)
    {
        let x = string[i].toLowerCase();
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') count++;
    }
    return count;
};

module.exports =
{
    countVowels
}