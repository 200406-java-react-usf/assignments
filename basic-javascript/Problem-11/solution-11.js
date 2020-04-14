//Function that will check two different arrays and compare
//them to each other to see if they are the SyncManager.
function compareTwoArrays(arr1, arr2) {
  //Are the arrays the same size is the first condition
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Sort each array so that we can compare each index value
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  //Use a for loop to compare each index of each array to
  //insure that they are equal
  for (i = 0; i < arr1.length; i++) {
    //Checks each array index
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  //If both arrays match, true will be returned
  return true;
}

module.exports = {
  compareTwoArrays,
};
