//Problem 1: Make each link direct the user to its respective website (see id)
let googleLink = document.getElementsByName('google')[0].setAttribute('href', 'https://www.google.com/');
let twitterLink = document.getElementsByName('twitter')[0].setAttribute('href','https://twitter.com/explore');
let slackLink = document.getElementsByName('slack')[0].setAttribute('href','https://slack.com/');
let javadocsLink = document.getElementsByName('javadocs')[0].setAttribute('href','https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html');

let google = document.getElementsByName('google')[0].innerHTML = 'Google';
let twitter = document.getElementsByName('twitter')[0].innerHTML = 'Twitter';
let slack = document.getElementsByName('slack')[0].innerHTML = 'Slack';
let javaDoc = document.getElementsByName('javadocs')[0].innerText = 'JavaDocs';

//Problem 2: Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)
document.getElementById('planet').options[3].disabled = true;

//Problem 3: Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.
function alienText() {
    
    let e = document.getElementById('planet');
    let message = e.options[e.selectedIndex].text;
    let target = document.querySelector("p[hidden]");

    if(message != 'Earth'){
        target.removeAttribute('hidden');
    } else {
        document.getElementsByTagName('p')[5].setAttribute('hidden', true);
    }
}

document.getElementById('planet').addEventListener('click', alienText);

//Problem 4: When the submit button is pressed, get the values from all of the input into a new row in the table below.  Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.
function fillTable() {

    let planet = document.getElementById('planet');

    let firstName = document.getElementById('firstname').value;
    if(!firstName || firstName.length < 2) return;
    let lastName = document.getElementById('lastname').value;
    if(!lastName || lastName.length < 2) return;
    let email = document.getElementById('email').value;
    let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!email || !emailTest.test(email)) return;
    let phone = document.getElementById('phone').value;
    let phoneTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    if(!phone || !phoneTest.test(phone)) return;
    let birthday = document.getElementById('bday').value;
    if(!birthday) return;
    let res = planet.options[planet.selectedIndex].text;
    if(!res) return;
    let color = document.getElementById('color').value;
    if(!color) return;
    let gender;
    let activies = [];
    //Checking for gender
    for(option of document.getElementsByName('gender')) {
        if (option.checked) {
            if (option.value == 'male') {
                option.value = 'Male';
            }
            if (option.value == 'female') {
                option.value = 'Female';
            }
            if (option.value == 'other') {
                option.value = 'Other';
            }
        }
        gender = option.value;
    }
    if(!gender) return;
    //checking for activies
    for (option of document.getElementsByClassName('activity')) {
        if (option.checked) {
            if(option.value === 'hiking') {
                option.value = 'hiking';
            }
            if(option.value === 'stamp') {
                option.value = 'stamp collecting';
            }
            if(option.value === 'birding') {
                option.value = 'birding';
            }
            if(option.value === 'basket') {
                option.value = 'underwater basket weaving';
            }
            activies.push(option.value);
        }
    }
    if(activies === []) return;

    //Created new table and append rows
    let row = document.createElement('tr');
    let firstNameCell = document.createElement('td');
    let emailCell = document.createElement('td');
    let phoneCell = document.createElement('td');
    let birthdayCell = document.createElement('td');
    let colorCell = document.createElement('td');
    let genderCell = document.createElement('td');
    let activityListCell = document.createElement('td');
    let activitiesList = document.createElement('ul');

    
    row.appendChild(firstNameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    row.appendChild(birthdayCell);
    row.appendChild(colorCell);
    row.appendChild(genderCell);
    row.appendChild(activityListCell);
    activityListCell.appendChild(activitiesList);

    document.getElementsByTagName('tbody')[0].appendChild(row);

    firstNameCell.innerText = firstName;
    emailCell.innerText = email;
    phoneCell.innerText = phone;
    birthdayCell.innerText = birthday;
    colorCell.innerText = color;
    genderCell.innerText = gender;

    for(item of activies) {
        let e = document.createElement('li');
        activitiesList.appendChild(e);
        e.innerHTML = item;
    }

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('bday').value = '';
    document.getElementById('color').value = '#000000';
    document.getElementById('planet').selectedIndex = 0;

    for (option of document.getElementsByName('gender')){
        option.checked = false;
    }

    for (option of document.getElementsByClassName('activity')){
        option.checked = false;
    }
}

document.getElementById('form-sub').addEventListener('click', fillTable);
//Problem 5: Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. The details should be hidden when the mouse is removed from the summary.

//Problem 6: Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.

//Problem 7: Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked. 

//Problem 8: Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)

//Problem 9: When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.

//Problem 10: Define function walkTheDom(node, func)
//	            This function should traverse every node in the DOM. 
//	            Use recursion. On each node, calle func(node).
