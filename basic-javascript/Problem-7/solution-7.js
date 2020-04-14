//Takes in a number and calculates the fibonacci at that number
function fibonacci(number) {
  //Checking to make sure that the provided number is an integer
  if (typeof number != "number") {
    throw Error("Not valid type");
  }

  //Setting up condition 1:
  //if the number is less than 0, we shall return -1
  if (number < 0) {
    return -1;
  }
  //Condition 2:
  //if the number is equal to 0, return 0
  if (number == 0) {
    return 0;
  }
  //Store the first two values of the fibonacci
  let a = 1,
    b = 1;
  //Create a for loop that allows to store the two pervious
  //solutions to help run higher values without runtime errors
  //This is an example of recursion
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  //returns the value
  return b;
}

//Exports information
module.exports = {
  fibonacci,
};
