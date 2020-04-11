// the string "test"
//var testString = "test";

//string we are searching through to find test
//var stringToFindTestIn = "I'm not testing";

//loop to find "test" within the stringToFindTestIn

function removeTestString(testInput, searchInput){

   for (var i = 0; i < searchInput.length; i++){

        if (searchInput[i] == testInput[0]){

            if (searchInput[i+1] == testInput[1]){

                if (searchInput[i+2] == testInput[2]){

                    if (searchInput[i+3] == testInput[3]){

                        var partOne = searchInput.slice(0, i);

                        var partTwo = searchInput.slice(i+testInput.length, searchInput.length);

                        return partOne + partTwo;

                        break;

                    } 

                }

            }

        } 

        if (i !== searchInput.length - 1){

            continue;

        } else {

            return searchInput;

        }
    
   }

}

module.exports = {

    removeTestString

}

//console.log(removeTestString(testString,stringToFindTestIn));
