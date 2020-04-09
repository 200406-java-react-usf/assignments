const TrialEmail = 'jdvalencia1994@hotmail.com.co';
if(TrialEmail.indexOf('@') == -1 || TrialEmail.indexOf('.') == -1){
    console.log("You have an invalid email");
}
const splitEmail = TrialEmail.split('@')
console.log(splitEmail);
const prefixEmail = splitEmail[0];
const suffixEmail = splitEmail[1];

function checkprefix(prefix) {
/*Regex first checks for any word more than 1 occurence then (check for 0 or 1 occurrence of underscore period or dash then checks any new word more than one occurence) 
then check for 0 or 1 more ocurrence of the parenthesis
*/
if(/^\w+([_.-]{0,1}\w+)*$/.test(prefix)){    
        console.log("Valid username");
    }
    else{
        console.log("invalid username");
    }
}

function checksuffix(suffix) {
    //Regex check
    if(/^\w+(\.?\w+)*$/.test(suffix)){ 
        console.log("Valid domain");
    }
    else{
        console.log("invalid domain");
    }
}
checkprefix(prefixEmail);
checksuffix(suffixEmail);
