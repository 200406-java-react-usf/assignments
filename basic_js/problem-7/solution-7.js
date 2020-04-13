function fibonacci(num, onComplete, onError) {

    if (!Number.isInteger(num)){
        onError('Input is not an integer.')
    }
    else {
        let a = 1, b = 0, n = num, temp;

         if (num > 0){
            while (num > 0){
                temp = a;
                a = a + b;
                b = temp;
                num--;
                //console.log(b);
            }
        }
        else if (num < 0) {
            while (num < 0){
                temp = a;
                a = a + b;
                b = temp;
                num++;
            }
            b = b * (-1)**(n+1); 
        }
        onComplete(b);
    }
}

module.exports = {
    fibonacci
}
// fibonacci(13, val => {console.log(val)}, () => {});
// fibonacci(-4, val => {console.log(val)}, () => {});
// fibonacci(0, val => {console.log(val)}, () => {});
// fibonacci('1',  () => {}, err => {console.log(err)});
