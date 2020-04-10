function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

let test = 'going to test how this works'

vowel = getVowels(test);
console.log(vowel);