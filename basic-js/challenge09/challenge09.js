function stringFinder(arrayOfStrings){
//do .length on each element in the array
    let strmap = arrayOfStrings.map(x => x.length);
//return highest number
    return strmap.indexOf(Math.max(...strmap))
     
    
}
console.log(stringFinder(["LR","LJR","sdgferterty"]))
module.exports = stringFinder