function getVowels(str, onComplete, onError) {
    if (typeof str == "string") {
        var count = str.match(/[aeiou]/gi);
        if (!count) {
            onError('No vowels found');
        }

        else onComplete(count.length);
    }
    else onError('Input is not a string');
  }

  module.exports = {
      getVowels
    }
  
//   getVowels('abaegf', val => console.log(val), () => {});
//   getVowels('htmnjhg',  () => {}, err => console.log(err));
//   getVowels(25,  () => {}, err => console.log(err));