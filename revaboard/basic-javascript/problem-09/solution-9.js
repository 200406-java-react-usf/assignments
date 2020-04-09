function main(input){
    var index=0;
    var max = 0;
    for (i = 0; i<= input.length-1; i++){
        if (input[i].length>max){
            console.log(input[i].length);
            index = i;
            max = input[i].length;
        }
    }
    return index;
}