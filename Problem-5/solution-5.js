//Write a function that takes in a string and a number as parameters and implements a Caesar Shift encryption.

function caesarShift(num, str){
    var result = '';
    var charCode = 0;

    for(var i=0;i<str.length;i++){
        //to ignore symboles
        const regex = /\W/;
        if(!regex.test(str[i])){
            charCode = (str[i].charCodeAt()) + num;
            result += String.fromCharCode(charCode);
        }    
        else{
            result += str[i];
        }
    }
    
    return result;
}
//cde%cde
console.log(caesarShift(2,'abc%abc'));

module.exports = {caesarShift}