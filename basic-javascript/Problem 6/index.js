const vowelCounter = (str) => {
    let re = /[aeiou]/g;

    let array = str.match(re);
    vowelTotal = array.length;

    console.log(vowelTotal);
}

module.exports = vowelCounter;