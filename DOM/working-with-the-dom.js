/*1-sets the destination of the links at the top of the page*/ 
    document.getElementsByName('google')[0].href ="https://www.google.com/"
    document.getElementsByName('twitter')[0].href ="https://www.twitter.com/"
    document.getElementsByName('slack')[0].href ="https://www.slack.com/"
    document.getElementsByName('javadocs')[0].href ="https://www.javadocs.com/"


/*2-Disabling Pluto planet of residency option*/
document.getElementById('planet').options[3].disabled = true


/*problem 3- revealing hidden message */
let o = document.getElementById('planet')
o.addEventListener("change",()=>{
    let p = document.querySelector('br ~ p')
    if (o.options[o.selectedIndex].value != 'Earth'){
    p.hidden = false}
    
})

/*problem 4*/ 


/*5- mouse over summary to open details*/
let details = document.querySelector('details')

details.addEventListener('mouseenter',()=>{
    details.setAttribute('open',true)
})

details.addEventListener('mouseleave',()=>{
    details.removeAttribute('open')
})


/*6-print all the spans to the console*/
spans = document.querySelectorAll('span')
spans.forEach.call(spans,(span) => {
    console.log(span.innerHTML)
});


/*7- display earth time */
document.getElementById('earth_time_check').addEventListener('click',()=>{earthTime()});

function earthTime(){
    
    let time = document.getElementById('earth_time')
    let now = new Date()
    time.innerHTML =  now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()

}


/*8- intergalactic directory color change */
ig = document.getElementsByTagName('h1')[0]
ig.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#'+ Math.random().toString(16).substr(-6)
    
})

/*9- calculator*/

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let op = document.getElementById('operation')

// n1.addEventListener('input',()=>{
//     console.log(n1.value)
// })

// n2.addEventListener('input',()=>{
//     console.log(n2.value)
// })

function calculator(){
    switch(op.value){
        case 'Add':
            document.getElementById('result').innerHTML =(Number(n1.value)+Number(n2.value))
        break;
        case 'Subtract':
            document.getElementById('result').innerHTML =(Number(n1.value)-Number(n2.value))
        break;
        case 'Multiply':
            document.getElementById('result').innerHTML =(Number(n1.value)*Number(n2.value))
        break;
        case 'Divide':
            document.getElementById('result').innerHTML =(Number(n1.value)/Number(n2.value))
        break;
    }
}

op.addEventListener('change',()=>{
calculator()
})

