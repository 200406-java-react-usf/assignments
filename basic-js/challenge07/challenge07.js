function fibonacci(n){

    if (n<=!1) {
        console.log(fibonacci(n-1) + fibonacci(n-2));
    }
    else{
        console.log(1);
    }

}

fibonacci();

