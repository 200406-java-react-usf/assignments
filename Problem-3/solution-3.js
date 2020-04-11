//Write a function to remove a character at the specified position of a given string and return the new string.

function removePos(index){
    var str = "Vocation";
    var strArray = str.split("");

    for(var i = index; i<strArray.length;i++){
        strArray[i]=strArray[i+1];
    }
    var newstr = strArray.join("");
    return newstr;

}
//Voction
console.log("remove the 3rd index of 'Vocation' become " + removePos(3));