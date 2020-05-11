/*  Mohamed Aboulela
 *  DOM Manipulation assignment
 */

//Problem 1: Make each link direct the user to its respective website (see id)

document.getElementsByName('google')[0].setAttribute('href', 'https://www.google.com/');
document.getElementsByName('twitter')[0].setAttribute('href', 'https://www.twitter.com/');
document.getElementsByName('slack')[0].setAttribute('href', 'https://www.slack.com/');
document.getElementsByName('javadocs')[0].setAttribute('href', 'https://www.docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html/');

//Problem 2: Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)

document.getElementById('planet').options[3].disabled = true;

//Problem 3: Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.

function alienText() {
    let e = document.getElementById('planet');
    let m = e.options[e.selectedIndex].text;
    let t = document.querySelector("p[hidden]");

    if(m != 'Earth'){
        t.removeAttribute('hidden');
    } else {
        document.getElementsByTagName('p')[5].setAttribute('hidden', true);
    }
}

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

function openDetails() {
    document.getElementsByTagName('details')[0].addEventListener('mouseover', () => {	
	    document.getElementsByTagName('details')[0].setAttribute('open',true);
    });

    document.getElementsByTagName('details')[0].addEventListener('mouseout', () => {	
	    document.getElementsByTagName('details')[0].removeAttribute('open');
    })
}

//Problem 6: Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.

function secretMessage(){
    let span = document.getElementsByTagName('span');
    let string = '';
        for(item of span){
            string = string + item.innerHTML;
        }
    }

//Problem 7: Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked. 

function earthTime() {
    document.getElementById('earth_time_check').addEventListener('click', () => {
	    document.getElementById('earth_time').innerText = new Date().toLocaleTimeString();
    });
}

//Problem 8: Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    if(color == '#000000') return;

setTimeout( () => {

    document.body.style.backgroundColor = color

}, 3000);
}

//Problem 9: When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.

document.getElementById('n1').addEventListener('blur', operation);
document.getElementById('n2').addEventListener('blur', operation);
document.getElementById('operation').addEventListener('blur', operation);

function operation() {

	let e = document.getElementById('operation')
	let select = e.options[e.selectedIndex].text;

	let n1 = +document.getElementById('n1').value;
	let n2 = +document.getElementById('n2').value;

	switch(e) {
        case "Add":
            result = n1 + n2;
            console.log(result);
            break;
        case "Subtract":
            result = n1 + n2;
            console.log(result);
            break;
        case "Divide":
            result = n1 / n2;
            console.log(result);
            break;
        case "Multiply":
            result = n1 * n2;
            console.log(result);
            break;
    }

		document.getElementById('result').innerText = result;
}

//Problem 10: Define function walkTheDom(node, func)
//	            This function should traverse every node in the DOM. 
//	            Use recursion. On each node, calle func(node).

function walkTheDom(node, func) {
    func(node);

    node = node.firstChild;
    while (node) {
        walkTheDom(node, func);
        node = node.nextSibling;

    }
}