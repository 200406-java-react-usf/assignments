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
document.getElementById('planet').addEventListener('click', alienText);

/*When the submit button is pressed, get the values from all of the input into a new row in the table below.  
Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number 
and email structure. This should continue to work for multiple entries and rows.*/
document.getElementById('form-sub').addEventListener('click', () => {
    // let first = document.getElementById('firstname').value;
    // if (first.length < 2) window.alert('Not a valid first name');
    // let last = document.getElementById('lastname').value;
    // if (last.length < 2) window.alert('Not a valid last name');
    // let email = document.getElementById('email').value;
    // let validEmail = /\S+@\S+\.\S+/;
    // if (!email && !validEmail.test(email)) window.alert("Not a valid email.");
    // let phone = document.getElementById('phone').value;
    // let phoneValidator = /\d\d\d+\-\d\d\d+\-\d\d\d\d/
    // if (!phone && !phoneValidator.test(phone)) window.alert("Not a valid phone number. EX:111-111-1111.");
    // let birthday = document.getElementById('bday').value;
    // let bdayValidator = /\d\d+\/+\d\d+\/\d\d\d\d/
    // if (!birthday && !bdayValidator.test(birthday)) window.alert("Not a valid birthday. EX:01/01/1111.");
    // let planets = document.getElementById('planet')
    // let planet = planets.options(planets.selectedIndex).text;
    // let gender = document.getElementsByName('gender').value;
    // for (i=0;i<3;i++){
    //     if (gender.checked)
    //     gender = document.getElementsByName('gender')[i].value;
    //     else window.alert('Please select a gender')
    // }
    // let color = document.getElementById('color').value;
    let activity = [];
    for (i=0;i<4;i++){
    let selectedAnything = false;
        if (document.getElementsByClassName('activity')[i].checked){
            if (i = 0){
                activity.push('hiking');
                selectedAnything = true;
            }else if (i = 1){
                activity.push('stamp collection');
                selectedAnything = true;
            }else if (i = 2){
                activity.push('birding');
                selectedAnything = true;
            }else if (i = 3){
                activity.push('underwater basket weaver');
                selectedAnything = true;
            }
        }else if (i = 3 && selectedAnything == false){
            window.alert('Please select an activity even if they all suck.');
        }
    }
    console.log(selectedAnything);
    console.log(activity);
});



/*Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. 
The details should be hidden when the mouse is removed from the summary.

Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.

Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” 
button is clicked. 

Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. 
Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also 
    couldn’t see the text but it’s enough to just accomodate for a black background)

When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the 
element with id result.

Define function walkTheDom(node, func)
	This function should traverse every node in the DOM. 
	Use recursion. On each node, calle func(node). */