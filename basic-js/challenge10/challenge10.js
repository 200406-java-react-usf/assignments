function wordCategory(aString){
    let str = aString.toUpperCase()
    if (str.startsWith("A")|str.startsWith("E")|str.startsWith("I")|
    str.startsWith("O")|str.startsWith("U")){
        return "A"
    }
    else if(str.startsWith("B")|str.startsWith("C")|str.startsWith("D")|
    str.startsWith("F")|str.startsWith("G")){
        return "B"
    }
    else if(str.startsWith("H")|str.startsWith("J")|str.startsWith("K")|
    str.startsWith("L")|str.startsWith("M")){
        return "C"
    }
    else if(str.startsWith("N")|str.startsWith("P")|str.startsWith("Q")|
    str.startsWith("R")|str.startsWith("S")|str.startsWith("T")|str.startsWith("V")|
    str.startsWith("X")|str.startsWith("Y")|str.startsWith("Z")){
        return "D"   
    }
    else{return "E"}

}




module.exports = wordCategory