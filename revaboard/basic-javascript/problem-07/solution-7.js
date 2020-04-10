function fibonacci(input){
    let output = [];
    
    //per wiki reversed fibonacci starts at 1 as well
    output[-1] = 1;
    output[0] = 0;
    output[1] = 1;

    if(input>=2){
        for (i = 2; i<=input; i++){    
            output[i]=output[i-1]+output[i-2];
        }
    }
    if(input<=0){        
        for (i = -2; i>=input-1; i--){
            output[i]=output[i+2]-output[i+1];
        }
    }
    return output[input];
}

for (j = 0; j >= -10; j--){
    console.log(j+" : "+ fibonacci(j));
}

for (k = 0; k <= 10; k++){
    console.log(k+" : "+ fibonacci(k));
}