function main(input, onError){
    if (!Array.isArray(input)) {
        onError('Bad array request');
        return;
      }
    let index=0;
    let max = 0;
    for (i = 0; i<= input.length-1; i++){
        if (typeof input[i] !== "string") {
            onError('Bad string request');
            return;
          }
        if (input[i].length>max){
            index = i;
            max = input[i].length;
        }
    }
    return index;
}

module.exports = main;