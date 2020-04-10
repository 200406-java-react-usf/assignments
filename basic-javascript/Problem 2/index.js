//const TrialEmail = 'jdvalencia..1994@hotmail.com';
const emailChecker = (TrialEmail) => {
    if (TrialEmail.indexOf('@') == -1 || TrialEmail.indexOf('.') == -1) {
        console.log("You have an invalid email");
    }
    else {
        const splitEmail = TrialEmail.split('@')
        //console.log(splitEmail);
        const prefixEmail = splitEmail[0];
        const suffixEmail = splitEmail[1];

        function checkEmailSections(prefix, suffix) {
            /*Regex first checks for any word more than 1 occurence then (check for 0 or 1 occurrence of underscore period or dash then checks any new word more than one occurence) 
            then check for 0 or 1 more ocurrence of the parenthesis
            */
            if (/^\w+([_.-]{0,1}\w+)*$/.test(prefix)) {
                if (/^\w+([.-]{0,1}\w+)*$/.test(suffix)) {
                    console.log("Valid Email!");
                }
                else {
                    console.log("invalid email(domain)");
                }
                //console.log("Valid username");
            }
            else {
                console.log("invalid email(username)");
            }
        }
        checkEmailSections(prefixEmail, suffixEmail);


    }
}

emailChecker('jdvalencia_1994@hotmail.com');