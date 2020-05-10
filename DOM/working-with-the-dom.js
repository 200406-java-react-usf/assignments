/* #1
Make each link direct the user to its respective website */
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

/* #2
Disable the Pluto Planet of Residency option. */
let disablePluto = document.getElementById('planet');
disablePluto.options[3].setAttribute('disabled', false);

/* #3
Define a function alienText() which shows the hidden element 
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

/* #4
When the submit button is pressed, get the values 
from all of the input into a new row in the table below.  
Make sure no input is empty, check that first and last name 
are at least two letters each. Validate for valid phone number 
and email structure. This should continue to work for 
multiple entries and rows. */
let submitBtn = document.getElementById('form-sub');
function newForm () {
    // get the values of all the elements
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let bday = document.getElementById('bday').value;
    let phone = document.getElementById('phone').value;
    let favColor = document.getElementById('color').value;

    // validate elements 
    if (!fn || fn.length <= 2){
        return;    
    }
    if (!ln || ln.length <= 2) {
        return;
    }
    if (!email || !email.match('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')){
        return;
    };
    if (!phone || phone.match('/^\d{10}$/')){
        return;
    };

    if (!bday) {
        return;
    }

    // create the values to save them into the HTML file
    let createdRow = document.createComment('tr');
    let createdFn = document.createComment('td');
    let createdEmail = document.createElement('td');
    let createdBday = document.createElement('td');
    let createdPhone = document.createElement('td');
    let createdColor = document.createElement('td');
    let createdGender = document.createElement('td');
    let createdActivitiesCell = document.createElement('td');
    let createdActivitiesUL = document.createElement('ul');
    
    // append values into the newly created row
    createdRow.appendChild(createdFn);
    createdRow.appendChild(createdEmail);
    createdRow.appendChild(createdPhone);
    createdRow.appendChild(createdBday);
    createdRow.appendChild(createdColor);
    createdRow.appendChild(createdGender);
    createdRow.appendChild(createdActivitiesCell);
    createdActivitiesCell.append(createdActivitiesUL);

    document.getElementsByTagName('tbody')[0].appendChild(createdRow); // appending the created row into the tbody

    // Fill the html values
    createdFn.innerHTML = fn; 
    console.log(createdFn);
    
    createdEmail.innerHTML = email;
    createdPhone.innerHTML = phone;
    createdBday.innerHTML = bday;
    createdColor.innerHTML = favColor; 
    let checkedGender = document.getElementsByName('gender');
    let checkedActivities = document.getElementsByClassName('activity');

    let gender;
    for (let i of checkedGender) {
        if (i.checked){
            gender = i.value;
        }
    }
    if (!gender) return;
    createdGender.appendChild(gender);

    for (let i of checkedActivities) {
        if (i .checked){
            if(i.value === 'hiking'){
                let li = document.createElement('li');
                li.innerHTML = 'hiking';
                createdActivitiesUL.appendChild(li);
            }
            if (i.value === 'stamp'){
                let li = document.createElement('li');
                li.innerHTML = 'stamp collecting';
                createdActivitiesUL.appendChild(li);
            }
            if (i.value === 'birding'){
                let li = document.createElement('li');
                li.innerHTML = 'birding';
                createdActivitiesUL.appendChild(li);
            }
            if (i.value === 'basket') {
                let li = document.createElement('li');
                li.innerHTML = 'underwater basket weaving';
                createdActivitiesUL.appendChild(li);
            }
        }
    }

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('bday').value = '';
    document.getElementById('color').value = '#000000';
    document.getElementById('planet').selectedIndex = 0;
}
submitBtn.addEventListener('click', newForm);

/* #5
Create a function openDetails() which opens the details element. 
Invoke this function when the details’ summary is moused over. 
The details should be hidden when the mouse is removed from the summary.*/
function openDetails(){
    document.getElementsByTagName('details')[0].setAttribute('open', true);
}
document.getElementsByTagName('details')[0].addEventListener('mouseover', openDetails);

function hideDetails(){
    document.getElementsByTagName('details')[0].removeAttribute('open');
}
document.getElementsByTagName('details')[0].addEventListener('mouseout', hideDetails);

/* #6
Create a function that concatenates the inner HTML of all of the span elements 
and prints the results to the console */
function concatSpan () {
    let span = document.getElementsByTagName('span');
    let concatString = '';
    for (let i of span) {
        concatString += i.innerHTML;
    }
    // console.log(concatString);   
}
concatSpan();