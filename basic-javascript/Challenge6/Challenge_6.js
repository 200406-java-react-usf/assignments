//Write a function to count the number of vowels in a given string.
function vCount(input)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var i = 0; i < input.length ; i++)
  {
    if (vowel_list.indexOf(input[i]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}
console.log("Challenge 6: Function to count the number of vowels in a string")
console.log(vCount("Let us know"));
module.exports = vCount