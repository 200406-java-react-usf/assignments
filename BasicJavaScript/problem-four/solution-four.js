/*

    so far works only with words strings that begin with test, anything with test in it will break
    and print the whole string

*/

// the string "test"
var testString = "test";

//string we are searching through to find test
var stringToFindTestIn = "testing";

//loop to find "test" within the stringToFindTestIn

   for (var i = 0; i < stringToFindTestIn.length; i++){

        if (stringToFindTestIn[i] == testString[0]){

            if (stringToFindTestIn[i+1] == testString[1]){

                if (stringToFindTestIn[i+2] == testString[2]){

                    if (stringToFindTestIn[i+3] == testString[3]){

                        var partOne = stringToFindTestIn.slice(0, i);

                        var partTwo = stringToFindTestIn.slice(i+testString.length, stringToFindTestIn.length);

                        console.log(partOne + partTwo);

                        break;

                    } 

                }

            }

        } else{

            console.log(stringToFindTestIn);
            break;

        }
    
   }


