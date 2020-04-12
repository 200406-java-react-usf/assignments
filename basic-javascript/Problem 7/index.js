let fibonnaci = (seq) => {
    let err = 'Not a number';
    let a = 0,b = 1,temporary;
    if(typeof seq != typeof a){
        return err;
    }
    
    if(seq < 0){
        return -1;
    }
    while( seq >= 0){
        temporary = a; //saving the a to be evaluated in the next iteration
        a = a + b; // adding the two previous number iterations
        b = temporary; // assign the result to be used in the next iretation or to be return
        seq--  //decrementing the value of seq
    }
    return b;

}

module.exports = fibonnaci;