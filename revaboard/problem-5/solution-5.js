function main(input, index) {
    //charcode start at 65 ends at 90
    var charArray = input.split("");
    console.log(charArray);
    for (i = 0; i <= charArray.length - 1; i++) {
      charArray[i] = charArray[i].charCodeAt(0);
      //charcode start at 97 ends at 122
      if (charArray[i]+index > 122){
        var newCode = charArray[i]+index-26;
      }else{     
        var newCode = charArray[i]+index;
      }
      charArray[i] = String.fromCharCode(newCode);
    }
    return charArray;
  }
