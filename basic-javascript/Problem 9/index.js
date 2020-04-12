const longestString = (stringArr) => {
    let err = 'Not an array';
    let valArr = new Array()
    if(typeof stringArr != typeof valArr){
        return err;
    }
    let test = ''
    for(let x = 0; x < stringArr.length;x++){
        if(stringArr[x].length > test.length){
            test = stringArr[x]; //set the highest string to var test
        }
    }
    let index = stringArr.indexOf(test);
    // test = stringArr.filter((word) => { 
    //     if(stringArr[word].length > test.length)  
    //     return stringArr[word]
    // });
    return index;
}


module.exports = longestString;