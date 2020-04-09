//take is a string and a position
function main(input, position){
    var string = input.replace(input.charAt(position),"")
    return string;
}

