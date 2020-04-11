//take is a string and a position
function main(input, position, onError){
    if (typeof input !== "string"){
        onError('Bad string request');
        return;
    }
    if (!Number.isInteger(position)){
        onError('Bad position request');
        return;
    }
    let string = input.replace(input.charAt(position),"");
    return string;
}

module.exports = main;