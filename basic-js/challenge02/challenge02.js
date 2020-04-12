function checkIfValidEmail(email) {
    let emailpattern = /\S+@\S+\.(com|net|org|edu|gov)/;
    return (emailpattern.test(email));  
       

}

let anEmailToCheck = 'Someone@gmail.com'
let anotherEmailToCheck = 'willnotgiveyouanemail,@(^)&.6$5you';
console.log(checkIfValidEmail(anEmailToCheck));
console.log(checkIfValidEmail(anotherEmailToCheck));