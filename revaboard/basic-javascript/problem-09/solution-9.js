function main(input){
    let index=0;
    let max = 0;
    for (i = 0; i<= input.length-1; i++){
        if (input[i].length>max){
            console.log(input[i].length);
            index = i;
            max = input[i].length;
        }
    }
    return index;
}