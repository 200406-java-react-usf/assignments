// input will be a string
function main(input){
    const vowel = ["a","e","i","o","u","A","E","I","O","U"]
    let string = input.split("");
    let count = 0;
    string.forEach(element =>{
        if (vowel.includes(element)){
            count +=1
        }
    })
    return count;
}