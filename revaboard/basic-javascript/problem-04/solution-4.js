function main(input, onError){
    //use replace method
    if (typeof input !== "string"){
        onError('Bad string request');
        return;
    }
    let string = input.replace("test", "");
    return string;
}
module.exports = main;