// Write a function that takes in a string
// and a number as parameters and implements 
// a Caesar Shift encryption.


ceasarShift = (str, key) => {
    const ceasars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let str2 = ``;
     if(typeof(str) != 'string') throw(`${str} is not a string`);
     if(typeof(key) != 'number') thrpw(`${key} is not a number`);

    for (i=0; i<str.length; i++) {

        myChar = str.charAt(i).toUpperCase();

        if(ceasars.indexOf(myChar) >= 0) {
            str2 += ceasars.charAt(key + ceasars.indexOf(myChar));
        }
        else str2 += myChar;                
    }
    //console.log(str2);
    return str2;
}
module.exports = {
    ceasarShift
}
//ceasarShift(`Beware the Ides of March`, 7);