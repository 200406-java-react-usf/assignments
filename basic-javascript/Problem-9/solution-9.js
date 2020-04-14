//This function determines the index of the longest string in a array
function longestString(array) {
  //This sets the max size (which is going to be the length of the string
  //at the index of the array) to be the first index of the array
  let maxSize = array[0];

  //Use a for loop to check each index in the array
  for (let i = 0; i < array.length; i++) {
    //Use the if statement to compare the max size string length
    //to each string length in the array
    //if a bigger one appears, then it becomes the new maxSize
    if (array[i].length > maxSize.length) {
      maxSize = array[i];
    }
  }

  //return the index at which the maxSize is located in the array
  return array.indexOf(maxSize);
}

//Exporting the files
module.exports = {
  longestString,
};
