var caesarShift = function(str, amount, onComplete, onError) {

    if( typeof str != "string"){
        onError('Input provided is not a string.')
    }
    else if(!Number.isInteger(amount)){
        onError('Shift amount is not an integer.')
    }
    else {
        // Adjust the amount so that the amount is a positive value. 
        while (amount < 0) {amount = amount + 26;}

        // Make an output variable
        var output = '';

        // Go through each character
        for (var i = 0; i < str.length; i ++) {

            // Get the character we'll be appending
            var c = str[i];

            // If it's a letter...
            if (c.match(/[a-z]/i)) {

                // Get its code
                var code = str.charCodeAt(i);

                // Uppercase letters
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

                // Lowercase letters
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

            }

            // Append
            output += c;

        }

        // All done!
        onComplete(output);
    }

};
//caesarShift(24, 1,  ()=>{}, err => console.log(err));
module.exports = {
    caesarShift
}