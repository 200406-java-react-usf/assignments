const stringCheck = (test) => {
    let testSample = 'test';
    let err = 'Not a valid string';
    if(typeof test != typeof testSample){
        return err;
    }

    let result = test.replace(testSample,'');

    return result;
}

module.exports = stringCheck;