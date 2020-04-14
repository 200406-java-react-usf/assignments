//Test string to ensure the function works
//let string = "Hello World";

//Arrow notation to setup a function with parameters of string and index
//function will use .slice to return selected elements in a array
const removeCharacter = (string, index) => {
  //Checking to make sure that the provided string is a string
  if (typeof string != "string") {
    throw Error("Not valid type");
  }

  //This is breaking up the string to the index picked                         (part 1)
  //This is collecting the remaining part of the string from the index picked  (part 2)
  part1 = string.slice(0, index);
  part2 = string.slice(index + 1, string.length);

  //This returns both parts as a single string
  return part1 + part2;
};

//Test to ensure that it would return Hello World with one less l
//console.log(removeCharacter(string, 3));

//Export method
module.exports = {
  removeCharacter,
};
