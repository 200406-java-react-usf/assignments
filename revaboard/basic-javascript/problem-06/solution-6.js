function main(input){
    const vowel = ["a","e","i","o","u","A","E","I","O","U"]
    var string = input.split("");
    var count = 0;
    string.forEach(element =>{
        if (vowel.includes(element)){
            count +=1
        }
    })
    return count;
}