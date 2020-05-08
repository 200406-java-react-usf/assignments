let google = document.querySelector('a[name^="google"]');
let twitter = document.querySelector('a[name^="twitter"]');
let slack = document.querySelector('a[name^="slack"]');
let javadocs = document.querySelector('a[name^="javadocs"]');
google.innerHTML = "Google";
google.setAttribute('href','http://www.google.com');
google.setAttribute('target','_blank');
twitter.innerHTML = "Twitter";
twitter.setAttribute('href','http://www.twitter.com');
twitter.setAttribute('target','_blank');
slack.innerHTML = "Slack";
slack.setAttribute('href','http://www.slack.com');
slack.setAttribute('target','_blank');
javadocs.innerHTML = "Javadocs";
javadocs.setAttribute('href','https://docs.oracle.com/javase/8/docs/api/');
javadocs.setAttribute('target','_blank');

let x =  document.querySelector('#planet > option:nth-child(4)');
x.setAttribute('disabled', true);

let earth = document.querySelector('#planet > option:nth-child(1)');
let mars = document.querySelector('#planet > option:nth-child(2)');
let pcb = document.querySelector('#planet > option:nth-child(3)');
let hidden_msg = document.querySelector('br ~ p');
let planets = document.getElementById('planet');
console.log(hidden_msg);

function alienText() {
        if(planets.value == mars.innerHTML || planets.value == pcb.innerHTML){
            hidden_msg.removeAttribute('hidden');
        }
        if(planets.value == earth.innerHTML){
            hidden_msg.setAttribute('hidden', true);
        }
        
    
}

planets.addEventListener('click', alienText);
console.log(mars.getAttribute('selected'));