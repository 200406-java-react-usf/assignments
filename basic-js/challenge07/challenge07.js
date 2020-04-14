function fibonacci(n){

    if (n>0) {
        return Math.round((Math.pow(1.61803,n))/(Math.sqrt(5)));
    }
    else{
        return(1);
    }

}
//console.log(fibonacci(20))
module.exports = fibonacci;

