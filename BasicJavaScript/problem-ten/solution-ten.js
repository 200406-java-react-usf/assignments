//let testString = 'what';

function testFirstCharOfString(input){

    if(typeof input !== 'string') throw Error('Please input a string')

    let arrayA = ['a','e','i','o','u'];
    let arrayB = ['b','c','d','f','g'];
    let arrayC = ['h','j','k','l','m'];
    let arrayD = ['n','p','q','r','s','t','v','x','y','z'];

    for (var i = 0; i < arrayD.length; i++){

        if (input[0] === arrayA[i]) return 'A';
        if (input[0] === arrayB[i]) return 'B';
        if (input[0] === arrayC[i]) return 'C';
        if (input[0] === arrayD[i]) return 'D';
        if (input[0] === 'w') return 'W is in none of these';

    }


}

module.exports = {

    testFirstCharOfString

}

//console.log(testFirstCharOfString(testString));