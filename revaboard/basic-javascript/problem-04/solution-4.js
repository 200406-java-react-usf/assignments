function main(input, onError){
    //use replace method to relace test with empty str
    if (typeof input !== "string"){
        onError('Bad string request');
        return;
    }
    let string = input.replace("test", "");
    return string;
}
module.exports = main;