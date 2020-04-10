function main(input, index) {
    //charcode start at 65 ends at 90
    let charArray = input.split("");
    console.log(input);
    for (i = 0; i <= charArray.length - 1; i++) {
      charArray[i] = charArray[i].charCodeAt();
      let newCode;
    //charcode lowercase start at 97 ends at 122
     if (charArray[i] >= 97 && charArray[i] <= 122 ){
            if (charArray[i]+index > 122){
             newCode = charArray[i]+index-26;
            }else{     
             newCode = charArray[i]+index;
            } 
    //charcode uppercase start at 65 ends at 90
        }else if(charArray[i] >= 65 && charArray[i] <= 90){
            if (charArray[i]+index > 90){
                newCode = charArray[i]+index-26;
                }else{     
                newCode = charArray[i]+index;
                }
        }else{
          newCode = charArray[i];
        }
      charArray[i] = String.fromCharCode(newCode);
    }
    return charArray.join("");
  }

  module.exports = main;


