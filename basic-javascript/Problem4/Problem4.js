/**
 * Write a function to check if the string "test" is present in a given 
 * string. If present, return the string without any occurrences of 
 * “test”, otherwise return the original one.
 */

 function deleteOccurrencesOfTest(myString) {
     while(myString.includes("test")) {
         var testIndex = myString.indexOf("test");
         myString = myString.substring(0,testIndex) +
                    myString.substring(testIndex+4, myString.length);
     }
     console.log(myString);
 }

testString = "this test is a test demo";
deleteOccurrencesOfTest(testString);
 