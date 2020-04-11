//Create a function that checks for a valid email format.

function validEmail(email){
    //take a string var
    //decision statements
    //first letter can not be @

    if(email[0] == '@'){
        return false;
    }
    //has to have @
    for(var i = 1; i<email.length; i++){
        if(email[i]=='@')
            return true;
    }
        return false;

}
//yes
console.log("john@hotmail.com is an email: " + validEmail("john@hotmail.com"));
//no
console.log("@sdfdf@hotmail.com is an email: " + validEmail("@sdfdf@hotmail.com"));
//no
console.log("sdfdf.hotmail.com is an email: " + validEmail("sdfdf.hotmail.com"));