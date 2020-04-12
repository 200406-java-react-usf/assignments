function removeCharacter(givenString, letterToRemove){
    let letterRegex = new RegExp(letterToRemove, "gi")
    return givenString.replace((letterRegex), " ")
}

console.log(removeCharacter( "Hello my name is louis and I dont like the letter h", "h"))


