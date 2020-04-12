function fibonacci(input, onError){
    if (!Number.isInteger(input)) {
        onError('Bad num request');
        return;
      }
    let output = [];

    output[0] = 0;
    output[1] = 1;

    if(input>=2){
        for (i = 2; i<=input; i++){    
            output[i]=output[i-1]+output[i-2];
        }
    }
    //per instructor, -1 will just return -1
    else if(input<=0){        
        return -1;
    }
    return output[input];
}

module.exports = fibonacci;