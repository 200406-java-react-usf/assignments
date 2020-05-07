function main(input, onError){
    if (typeof input !== "string") {
        onError('Bad string request');
        return;
      }
    let firstChar = input.split("")[0];
    if (["a", "e", "i", "o", "u"].includes(firstChar)){
        return "A";
    }else if (["b", "c", "d", "f", "g"].includes(firstChar)){
        return "B";
    }else if (["h", "j", "k", "l", "m"].includes(firstChar)){
        return "C";
    }else if (["n", "p", "q", "r", "s", "t", "v", "x", "v", "y", "z"].includes(firstChar)){
        return "D";
    }else{
        return "E";
    }
}
module.exports = main;