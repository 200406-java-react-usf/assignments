//This function takes in two arrays no matter the size
//and then returns one array where both have been added to each other
function addArry(arr1, arr2) {
  //Creating two empty arrays for later use
  let fillArray = [];
  let addedArray = [];

  //determines the small array and the large array
  shortArry = Math.min(arr1.length, arr2.length);
  longArry = Math.max(arr1.length, arr2.length);

  //this determines the array that is the smallest
  //from the two provided arrays
  if (shortArry == arr1.length) {
    fillArray = arr1;
  } else {
    fillArray = arr2;
  }

  //This fills the small array with zeros to match the
  //size of the large array so that we can add both of them
  for (let i = 0; i < longArry - shortArry; i++) {
    fillArray.push(0);
  }

  //This takes the first index of each array and adds it
  //the for loop allows this to happen at each index
  //Then it pushes that value to an empty array
  for (let i = 0; i < longArry; i++) {
    addedArray.push(arr1[i] + arr2[i]);
  }

  //Returns the new added array
  return addedArray;
}

//Exporting information
module.exports = {
  addArry,
};
