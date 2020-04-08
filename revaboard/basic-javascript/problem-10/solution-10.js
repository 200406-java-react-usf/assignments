function main(input){
    var firstChar = input.split("")[0];
    if (["a", "e", "i", "o", "u"].includes(firstChar)){
        return "A";
    }else if (["b", "c", "d", "f", "g"].includes(firstChar)){
        return "B";
    }else if (["h", "j", "k", "l", "m"].includes(firstChar)){
        return "C";
    }else if (["n", "p", "q", "r", "s", "t", "v", "x", "v", "z"].includes(firstChar)){
        return "D";
    }else{
        return "E";
    }
}
