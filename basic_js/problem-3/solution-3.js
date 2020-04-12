function removeChar(str, index, onComplete, onError) {
    //setTimeout(() =>{
        if (typeof str != "string"){
            onError('input not a string');
        }
        else if (!Number.isInteger(index)){
            onError('index not a integer');
        }
        else{

            length = str.length;
            if (index > length) {
                onError('Oh no the index is not in the string');
                return;
            }

            let returnedString =str.slice(0, index) + str.slice(index+1);
            onComplete(returnedString);
            return;
        }
    //}, 250);
};

removeChar('test', 2, str => console.log(str), () => {});
removeChar('test', 6, () => {}, err => console.log(err));
removeChar('test', 'a', () => {}, err => console.log(err));
removeChar(25, 6, () => {}, err => console.log(err));


module.exports= {removeChar};