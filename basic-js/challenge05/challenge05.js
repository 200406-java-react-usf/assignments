function CaesarShiftThisString(aString, aNumber){
    let encryptedString = ""
    let i=0
    while (i<= aString.length){
        i++
        return encryptedString = String.fromCharCode(aString.charCodeAt(i)+ aNumber)
    }


} 


console.log(CaesarShiftThisString('Hello',1))


