/*

    Idea:
        -take input string
        -make a vowel counter = 0
        -loop thru string, see if it is equivalent to a vowel
        -add one to the vowel counter

*/



let inputString = 'My name is Kevin';


function testForVowels(input){

    let vowelCounter = 0;

    for (var i = 0; i < input.length; i++){

        if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u'){
            vowelCounter++;
        }
    
    }

   return vowelCounter;
}

testForVowels(inputString);

module.exports = {

    testForVowels

}