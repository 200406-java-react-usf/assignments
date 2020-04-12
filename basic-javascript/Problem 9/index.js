const longestString = (stringArr) => {
    let test = ''
    for(let x = 0; x < stringArr.length;x++){
        if(stringArr[x].length > test.length){
            test = stringArr[x];
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