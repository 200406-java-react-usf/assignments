const vowelCounter = (str) => {
    let err = 'Not a string';
    if(typeof str != typeof err){
        return err;
    }
    let re = /[aeiou]/g;

    let array = str.match(re);
    vowelTotal = array.length;

    return vowelTotal;
}

module.exports = vowelCounter;