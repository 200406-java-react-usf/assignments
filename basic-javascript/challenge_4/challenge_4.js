/**Basic JavaScript Challenge 4
* 
* by Kennedy Wandelt
* 
* Contains a function which checks for instances of the word test/Test and returns it with those removed 
**/

function removeTest(userString){
    if(typeof(userString) !== "string") throw new Error("Input was not a string");

    //if no case of test in string
    if (userString.indexOf('test') == -1 && userString.indexOf('Test') == -1) return userString;
    //remove test or Test
    else {
        while (userString.indexOf('test') != -1) {
            userString = userString.replace(/test/g, '');
        }
        while (userString.indexOf('Test') != -1) {
            userString = userString.replace(/Test/g, '');
        }
        return userString; 
    }
}

module.exports = {
    removeTest
}
