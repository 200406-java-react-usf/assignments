function main(input, index) {
    //charcode start at 65 ends at 90
    let charArray = input.split("");
    console.log(charArray);
    for (i = 0; i <= charArray.length - 1; i++) {
      charArray[i] = charArray[i].charCodeAt(0);
    //charcode lowercase start at 97 ends at 122
     if (charArray[i] >= 97 ){
            if (charArray[i]+index > 122){
            let newCode = charArray[i]+index-26;
            }else{     
            let newCode = charArray[i]+index;
            }
        }
              
    //charcode uppercase start at 65 ends at 90
    else{
            if (charArray[i]+index > 90){
                let newCode = charArray[i]+index-26;
                }else{     
                let newCode = charArray[i]+index;
                }
        }
      charArray[i] = String.fromCharCode(newCode);
    }
    return charArray;
  }
