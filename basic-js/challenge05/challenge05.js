function CaesarShiftThisString(aString, aNumber){
    
    let aStringArr = aString.split(" ");
    let anEncryptedString = []

    
for(i=0;i < aString.length; i++){
    aStringArr.forEach( ()=> 
    
    anEncryptedString=(String.fromCharCode(aString.charCodeAt(i) + aNumber)));
      
}
    return anEncryptedString;

    }
    //how to make loop thru each letter, not just do first letter str.length times, removed i from "() => in line 8"
    //console.log(CaesarShiftThisString('B', -1)); 
    module.exports = CaesarShiftThisString




