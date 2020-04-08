/**
 * Create a function that checks for a valid email format.
 */

function checkValidEmail (email) {
    if (hasValidExtension(email) && 
        hasValidDomain(email) && 
        hasValidName(email)) {
        console.log("Email is valid");
    } else {
        console.log("Email is invalid")
    }
}

//Could potentially turn the valid extensions into a list, and add more
//invalid extensions
function hasValidExtension(email) {
    var valid = false;
    var extensionIndex = email.lastIndexOf(".");
    extension = email.slice(extensionIndex);
    if (extension == '.com' ||
        extension == '.org' ||
        extension == '.cc' ||
        extension == '.co') {
            valid = true
        }
    return valid;
}

//Could potentially check through a list of invalid characters
function hasValidDomain(email) {
    var atIndex = email.indexOf("@")+1;
    var extensionIndex = email.lastIndexOf(".");
    var domain = email.substring(atIndex, extensionIndex);
    if (domain.length > 0) {
        return true;
    }
}

function hasValidName(email) {
    var atIndex = email.indexOf("@");
    var name = email.substring(0, atIndex);
    if (name.length > 0) {
        return true;
    }
}

checkValidEmail('ebiven1563@gmail.cc');