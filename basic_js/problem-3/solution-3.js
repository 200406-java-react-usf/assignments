function removeChar(string, index, onComplete, onError) {
    //setTimeout(() =>{
            //validate that the index is in the string
        this.str = string;
        this.index = index;
        length = string.length;
        if (index > length) {
            onError('Oh no the index is not in the string');
            return;
        }
        
        let returnedString =str.slice(0, index) + str.slice(index+1);
        onComplete(returnedString);
        return;
        
    //}, 250);
};

//removeChar('test', 6, str => console.log(str), err => console.log(err))
module.exports= {removeChar};