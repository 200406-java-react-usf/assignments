function (string, index, cb) {
    setTimeout(() =>{
            //validate that the index is in the string
        this.string = string;
        this.index = index;
        length = string.length;
        if (index !< length) throw new Error('Oh no you gave me bad data');
        //break string into two parts, before the index and after the index
        if (index != 0) {
            let stringB = string.substring(0,index);
            let stringb = string.substring((index+1));
        //concate the strings together
        let returnedString = stringA.concat(stringB);
        cb(returnedString);
        }
    }, 250);
}