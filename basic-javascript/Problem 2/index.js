//const TrialEmail = 'jdvalencia..1994@hotmail.com';
const emailChecker = (TrialEmail) => {
    let err = "You have an invalid email";
    let err2 = "invalid email(domain)";
    let err3 = "invalid email(username)";
    let validEm = "Valid Email!";
    if (TrialEmail.indexOf('@') == -1 || TrialEmail.indexOf('.') == -1) {
        return err;
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
                    return validEm;
                }
                else {
                    return err2;
                }
                //console.log("Valid username");
            }
            else {
                return err3;
            }
        }
        let program = checkEmailSections(prefixEmail, suffixEmail);
        return program;


    }
}

module.exports = emailChecker;