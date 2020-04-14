function stringFinder(arrayOfStrings){
//do .length on each element in the array
    let map = arrayOfStrings.map(x => x.length);
//return highest number
    return map.indexOf(Math.max(...map))
     
    
}

console.log(stringFinder(["swedrfsd","arrayOfStrings","short"]))