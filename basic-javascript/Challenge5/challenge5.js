const caesarCipherShift = (string, shiftNumber) =>
{
    let shiftedString = '';
    for (let i = 0; i < string.length; i++)
    {
        const isUpperCase = (str) => {return str === str.toUpperCase()};

        if(isUpperCase(string[i]))
        {
            shiftedString += String.fromCharCode((string.charCodeAt(i) + shiftNumber - 65) % 26 + 65);
        }
        else
        {
            shiftedString += String.fromCharCode((string.charCodeAt(i) + shiftNumber - 97) % 26 + 97);
        }
    }

    return shiftedString;
}


module.exports = 
{
    caesarCipherShift
};
