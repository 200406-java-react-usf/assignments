/*

    Write function that adds the values of an array, no matter size

    Idea:
        -loop through one array, add the values together
        -to deal with arrays that are different sizes:
            -test which is larger in length, then add zeros to make lengths match

*/

 let arrayOne = [1,2,3];
 let arrayTwo = [4,5,6,7];

 function addArrays(one,two){

    //test to see which array is larger, then add zeros to make the arrays match in length

    if (one.length > two.length){

        while (one.length != two.length){

            two.push(0);
            
        }

    }

    if (one.length < two.length){

        while (one.length != two.length){

            one.push(0);
            
        }

    }

    let addedArray = [];

    for (var i = 0; i < one.length; i++){

        addedArray.push(one[i]+two[i]);

    }

    return addedArray;

 }

 module.exports = {

    addArrays

 }

 //console.log(addArrays(arrayOne,arrayTwo));