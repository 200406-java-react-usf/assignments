// Make each link direct the user to its respective website 
let firstLink = document.anchors[0];
let secondLink = document.anchors[1];
let thirdLink = document.anchors[2];
let fourthLink = document.anchors[3];
firstLink.innerHTML = 'Google';
secondLink.innerHTML = 'Twitter';
thirdLink.innerHTML = 'Slack';
fourthLink.innerHTML = 'JavaDocs';
firstLink.href = 'https://www.google.com/';
secondLink.href = 'https://twitter.com/';
thirdLink.href = 'https://slack.com/';
fourthLink.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';

// Disable the Pluto Planet of Residency option.
let disablePluto = document.getElementById('planet');
disablePluto.options[3].setAttribute('disabled', false);

/*Define a function alienText() which shows the hidden element 
displaying an alien message. When any planet other than Earth is selected, 
execute this function.*/
let hiddenMsg = document.querySelector('br ~ p');
let planet = document.getElementById('planet');
let earth = document.querySelector('#planet > option:nth-child(1)');
let mars = document.querySelector('#planet > option:nth-child(2)');
let proxCB = document.querySelector('#planet > option:nth-child(3)');
function alienText () { 
        if(planet.value == mars.innerHTML || planet.value == proxCB.innerHTML){
            hiddenMsg.removeAttribute('hidden');
        }
        if(planet.value == earth.innerHTML){
            hiddenMsg.setAttribute('hidden', true);
        }   
}
planet.addEventListener('click', alienText);
console.log(mars.getAttribute('selected'));

/* When the submit button is pressed, get the values 
from all of the input into a new row in the table below.  
Make sure no input is empty, check that first and last name 
are at least two letters each. Validate for valid phone number 
and email structure. This should continue to work for 
multiple entries and rows. */
let submitBtn = document.getElementById('form-sub');
function newForm () {
    let row = document.createComment('tr');
    let fName = document.createComment('td');
    let email = document.createElement('td');
    let birthday = document.createElement('td');
    let favColor = document.createElement('td');
    let gender = document.createElement('td');
    let activities = document.createElement('td');

}
submitBtn.addEventListener('click', newForm);