//take is a string and a position
function main(input, position, onError){
    // if input not str
    if (typeof input !== "string"){
        onError('Bad string request');
        return;
    }
    // if position not int
    if (!Number.isInteger(position)){
        onError('Bad position request');
        return;
    }
    let string = input.replace(input.charAt(position),"");
    return string;
}

module.exports = main;