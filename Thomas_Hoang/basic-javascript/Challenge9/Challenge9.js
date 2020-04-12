//Write a function to find the longest string from a given array of strings and returns the string’s array index.
testArr = ["This is the first", "This is the second", "This is the third", "This is the fourth and the longest"]
function findLongestIndex(arr){
    const str = []
    for (i = 0; i < arr.length; i++){
        str[i] = arr[i]

    }
    let longestStr = 0
    for (q = 1;q < str.length;q++){
        if (str[q].length > str[q - 1].length)
            longestStr = q
    }
    console.log("The longest string in the array is index: " + longestStr)
}

findLongestIndex(testArr)