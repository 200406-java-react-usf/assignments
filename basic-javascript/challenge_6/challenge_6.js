/**Basic JavaScript Challenge 6
* 
* by Kennedy Wandelt
* 
* Contains a function which accepts a string parameter and encrypts it via Caesar Shift
* Assumptions - y is not a vowel, only checking for a,e,i,o,and u
**/

function countVowels(userString) {
    var i
    var numOfVowels = 0
    userString.toLowerCase()
    for (i = 0; i < userString.length; i++) {
        var char = userString.charAt(i)
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            numOfVowels++
        }
    }
    return numOfVowels
}

console.log(countVowels('look at this string and gimme vowels'))