/**Basic JavaScript Challenge 4
* 
* by Kennedy Wandelt
* 
* Contains a function which checks for instances of the word test and returns it with those removed 
**/

function RemoveTest(userString){
    userString.toLowerCase()
    if (userString.indexOf('test') == -1) {
        return userString
    }
    else {
        while (userString.indexOf('test') != -1) {
            strLength = userString.length
            testIndex = userString.indexOf('test')
            substr1 = userString.substr(0, testIndex)
            substr2 = userString.slice(testIndex + 4, strLength)
            userString = substr1 + substr2
        }
        return userString
    }
}

//console.log(RemoveTest("testThis is the test string that I want to test"))