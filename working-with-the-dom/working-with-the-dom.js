//Problem 1

//set up query selector
let google = document.querySelector('a[name^="google"]');
let twitter = document.querySelector('a[name^="twitter"]');
let slack = document.querySelector('a[name^="slack"]');
let javadocs = document.querySelector('a[name^="javadocs"]');

//set up links
//google
google.innerHTML = "Google"; //text enclosed by a tags
google.setAttribute('href', 'http://www.google.com'); // href link
google.setAttribute('target', '_blank'); // opens in new page
//twitter
twitter.innerHTML = "Twitter";
twitter.setAttribute('href', 'http://www.twitter.com');
twitter.setAttribute('target', '_blank');
//slack
slack.innerHTML = "Slack";
slack.setAttribute('href', 'http://www.slack.com');
slack.setAttribute('target', '_blank');
//twitter
javadocs.innerHTML = "Javadocs";
javadocs.setAttribute('href', 'https://docs.oracle.com/en/java/');
javadocs.setAttribute('target', '_blank');

//Problem 2

let pluto = document.querySelector('#planet > option:nth-child(4)');
pluto.setAttribute('disabled', true);

//Problem 2

let pluto = document.querySelector('#planet > option:nth-child(4)');
pluto.setAttribute('disabled', true);

//Problem 3
let earth = document.querySelector('#planet > option:nth-child(1)');
let mars = document.querySelector('#planet > option:nth-child(2)');
let pcb = document.querySelector('#planet > option');
let hidden_msg = document.querySelector('.container > p');
let planets = document.getElementById('planet')

//function to remove hidden attribute
function alienText() {

    if(planets.value == earth.innerHTML){
        hidden_msg.setAttribute('hidden', true);
    } else{
        hidden_msg.removeAttribute('hidden');
    }
}
planets.addEventListener('change', alienText);



