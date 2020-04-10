const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let cypherAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const caesarCypher = (cypher,key) => {
    for(let k = 1; k < (key + 1); k++){
        shifted = cypherAlphabet.shift()
        cypherAlphabet.push(shifted)
    }
    cypherArray = cypher.split()
    let newArray = new Array()
    for(let x = 0;x < cypher.length; x++){
        
        for(let y = 0; y < alphabet.length; y++){
            cyphered = cypher[x].replace(alphabet[y],cypherAlphabet[y])
            if(cypher[x] == alphabet[y]){
                break;
            }
        }
        newArray.push(cyphered)
        
    }
    console.log(newArray)
    
}

caesarCypher('password',4);