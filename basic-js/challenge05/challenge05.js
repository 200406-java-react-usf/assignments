function CaesarShiftThisString(aString, aNumber){
    
    let aStringArr = aString.split(" ");

    console.log(aStringArr)
for(i=0;i < aString.length; i++){
    aStringArr.forEach( (i)=> (console.log(String.fromCharCode(aString.charCodeAt(i) + aNumber))));
    
}
    
    
    }
    

    CaesarShiftThisString('Hello',1);




