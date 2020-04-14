//Create a function that checks for a valid email format.
function validEmail(input)
{
let format = /\S+@\S+\.\S+/;
if (input.match(format))
    return true;
    else
    return false;
}
console.log("Challenge 2: Check if email is accurate");
console.log(validEmail('hdelissa@gmail.com'));

module.exports = validEmail;