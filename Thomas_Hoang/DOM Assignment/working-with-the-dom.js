/* Working with the DOM

In this assignment you will be getting practice interacting and working with the Document Object Model (DOM). Your task will be 
to complete the following tasks in a separate JS file titled working-with-the-dom.js . Use the provided HTML file found in this 
Drive folder. Note: you will not need to change anything about the HTML file in order to complete the tasks below. Push your 
completed assignment up to your branch by May 11, 2020.

Make each link direct the user to its respective website (see id) */
document.getElementsByName('google')[0].addEventListener('click', () => {
let google = 'https://www.google.com/';
document.getElementsByName('google')[0].href=google;
});

document.getElementsByName('twitter')[0].addEventListener('click', () => {
    let twitter = 'https://twitter.com/';
    document.getElementsByName('twitter')[0].href=twitter;
    });

document.getElementsByName('slack')[0].addEventListener('click', () => {
    let slack = 'https://slack.com/';
    document.getElementsByName('slack')[0].href=slack;
    });

document.getElementsByName('javadocs')[0].addEventListener('click', () => {
    let javadocs = 'https://www.oracle.com/java/technologies/javase/javadoc-tool.html';
    document.getElementsByName('javadocs')[0].href=javadocs;
    });

/*Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!! Dwarf Planets are planets too)*/
document.getElementById('planet').addEventListener('click', () => {
document.getElementById('planet').options[3].disabled = true;
});
/*Define a function alienText() which shows the hidden element displaying an alien message. When any planet other 
than Earth is selected, execute this function.*/
function alienText(){
    let planet = document.getElementById('planet').selectedIndex

    console.log(planet);
    if (planet === 1 || planet === 2){
        let x = document.querySelector('p[hidden]');
        x.removeAttribute('hidden');
    }else
        document.getElementsByTagName('p')[5].setAttribute('hidden', true);
}
document.getElementById('planet').addEventListener('click', alienText);

/*When the submit button is pressed, get the values from all of the input into a new row in the table below.  
Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number 
and email structure. This should continue to work for multiple entries and rows.*/
document.getElementById('form-sub').addEventListener('click', () => {
    let person = [];

    let first = document.getElementById('firstname').value;
    let last = document.getElementById('lastname').value;

    if (first.length < 2){ 
        window.alert('Not a valid first name');
        return; 
    }else if (last.length < 2){ 
        window.alert('Not a valid last name');
        return;
    }else {
        person.push(first + ' ' + last);
    }

    let email = document.getElementById('email').value;
    let validEmail = /\S+@\S+\.\S+/;

    if (!email && !validEmail.test(email)){ 
        window.alert("Not a valid email.");
        return;
    }else {
        person.push(email);
    }

    let phone = document.getElementById('phone').value;
    let phoneValidator = /\d\d\d\d\d\d\d\d\d\d/;

    if (!phone && !phoneValidator.test(phone)){
        window.alert("Not a valid phone number. EX:111-111-1111.");
        return;
    }else {
        person.push(phone);
    }

    let birthday = document.getElementById('bday').value;
    let bdayValidator = /\d\d+\/+\d\d+\/\d\d\d\d/;

    if (!birthday && !bdayValidator.test(birthday)){
        window.alert("Not a valid birthday. EX:01/01/1111.");
        return;
    }else {
        person.push(birthday);
    }

    let color = document.getElementById('color').value;
    person.push(color);

    let gender;
    let selectedAnything = false;
    for (let i=0;i<3;i++){
        if (document.getElementsByName('gender')[i].checked){
            gender = document.getElementsByName('gender')[i].value;
            person.push(gender);
            selectedAnything = true;
        }
        if (i == 2 && !selectedAnything) {
            window.alert('Please select a gender');
            return;
        }
    }

    /*For loop to check each activity and add it to person[] since multiple can be selected*/
    selectedAnything = false;
    for (let i=0;i<4;i++){
        if (document.getElementsByClassName('activity')[i].checked){
            if (i == 0){
                person.push('hiking');
                selectedAnything = true;
            }else if (i == 1){
                person.push('stamp collection');
                selectedAnything = true;
            }else if (i == 2){
                person.push('birding');
                selectedAnything = true;
            }else if (i == 3){
                person.push('underwater basket weaver');
                selectedAnything = true;
            }
        }else if (i == 3 && !selectedAnything){
            window.alert('Please select an activity even if they all suck.');
            return;
        }
    }

    let row = document.createElement('tr');
    /*Table row creator loop*/
    for(let i=0;i<person.length;i++){
        let cell;
        if (i < 6){
            cell = document.createElement('td');
            row.appendChild(cell).innerText = person[i];
        }else if (i >= 6){
            cell = document.createElement('ul');
            let activity = document.createElement('li');
            cell.appendChild(activity).innerText = person[i];
            row.appendChild(cell);
        }
    }
    document.getElementsByTagName('tbody')[0].appendChild(row);
});

/*Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. 
The details should be hidden when the mouse is removed from the summary.*/
function openDetails(){
    document.getElementsByTagName('details')[0].setAttribute('open', true);
}
function closeDetails(){
    document.getElementsByTagName('details')[0].removeAttribute('open');
}
document.getElementsByTagName('details')[0].addEventListener('mouseenter', openDetails);
document.getElementsByTagName('details')[0].addEventListener('mouseleave', closeDetails);
/*Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.*/
function concatSpans(){
    let allSpans= '';
    for (let i = 0;i < (document.getElementsByTagName('span')).length;i++){
        let newSpan = document.getElementsByTagName('span')[i].innerHTML;
        allSpans = allSpans + newSpan;
    }
    console.log(allSpans);
}
concatSpans();
/*Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” 
button is clicked.*/
function currentTime(){
    let t = new Date();
    document.getElementById("earth_time").innerHTML = new Date().toLocaleTimeString();;
}
document.getElementById('earth_time_check').addEventListener('click', currentTime);
/*Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. 
Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also 
    couldn’t see the text but it’s enough to just accomodate for a black background) */

/*When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the 
element with id result.

Define function walkTheDom(node, func)
	This function should traverse every node in the DOM. 
	Use recursion. On each node, calle func(node). */