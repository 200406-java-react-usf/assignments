/*

    Using RegEx to validate email

    src = https://www.w3resource.com/javascript/form/email-validation.php

        -two parts of an email, separated by the @ symbol
        -in the form of personalinfo@domain.something
            -personal info can contain:
                -uppercase A-Z or lowercase a-z
                -numbers 0-9
                -symbols !,#,$,%,&,',*,+,-,/,=,?,^,_,`,{,|,},~, and .
                    -dot cannot be first or last character, or come one after another (..)
                -domain name contained letters, numbers, hyphens, and dots.
            
        -RegEx given: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

*/

let givenRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let inputEmail = 'wagenheimk@me.com';

let testEmailFunction = (regEx, input) => {

    if (regEx.test(input)){

        return true;

    } else {

        return false;

    }
}    

console.log(testEmailFunction(givenRegEx,inputEmail));