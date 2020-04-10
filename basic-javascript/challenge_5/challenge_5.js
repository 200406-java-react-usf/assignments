/**Basic JavaScript Challenge 5
* 
* by Kennedy Wandelt
* 
* Contains a function which accepts a string parameter and encrypts it via Caesar Shift
**/

function caesarShift(userString) {
    userString.toLowerCase()
    var newString = ""
    for (i = 0; i < userString.length; i++) {
        char = userString.charCodeAt(i)
        if (char > 96 && char < 122) {
            char++
            newString = newString + String.fromCharCode(char)
        }
        else if (char == 122) {
            char = 97
            newString = newString + String.fromCharCode(char)
        }
        else {
            newString = newString + String.fromCharCode(char)
        }
    }
    return newString
}

console.log(caesarShift("let's try this again!"))