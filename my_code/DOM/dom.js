/* 	200406-Java-React-USF

	Working with the DOM Assignment

	Korey Keipe
*/

// #1) Make each link direct the user to its respective website (see id)

document.getElementsByName('google')[0].setAttribute('href', 'https://www.google.com/')
document.getElementsByName('google')[0].innerText = 'Google';

document.getElementsByName('twitter')[0].setAttribute('href', 'https://www.twitter.com/');
document.getElementsByName('twitter')[0].innerText = 'Twitter';

document.getElementsByName('slack')[0].setAttribute('href', 'https://slack.com/')
document.getElementsByName('slack')[0].innerText = 'Slack';

document.getElementsByName('javadocs')[0].setAttribute('href', 'https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html')
document.getElementsByName('javadocs')[0].innerText = 'JavaDocs';

// #2) Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!! Dwarf Planets are planets too)

document.getElementById('planet').options[3].disabled = true;
document.getElementById('planet').options[3].setAttribute('hidden', true)

// #3) Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.

function alienText() {

	let e = document.getElementById('planet');
	let text = e.options[e.selectedIndex].text;
	let target = document.querySelector('p[hidden]');

	if(text != 'Earth'){
		target.removeAttribute('hidden');
	} else {
		document.getElementsByTagName('p')[5].setAttribute('hidden', true);
	}
}

document.getElementById('planet').addEventListener('click', alienText);

// #4) When the submit button is pressed, get the values from all of the input into a new row in the table below.  
//		Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid 
//		phone number and email structure. This should continue to work for multiple entries and rows.

function getInfo() {

	let firstName = document.getElementById('firstname').value;
		if(!firstName || firstName.length < 2) return;
	let lastName = document.getElementById('lastname').value;
		if(!lastName || lastName.length < 2) return;
	let email = document.getElementById('email').value;
		let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email || !emailTest.test(email)) return;
	let phone = document.getElementById('phone').value;
		let phoneTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
		if(!phone || !phoneTest.test(phone)) return console.log(phoneTest.test(phone));
		;
	let bday = document.getElementById('bday').value;
		if(!bday) return;
	let dropDown = document.getElementById('planet');
	let residensy = dropDown.options[dropDown.selectedIndex].text;
		if(!residensy) return;
	let gender;
		for(option of document.getElementsByName('gender')){
			if(option.checked){
				gender = option.value;
				if(gender == 'male') {gender = 'Male';}
				if(gender == 'female') {gender = 'Female';}
				if(gender == 'other') {gender = 'Other';}
			}
		}
		if(!gender);
	let favColor = document.getElementById('color').value;
	let activities = [];
		for(option of document.getElementsByClassName('activity')){
			if(option.checked){
				activity = option.value;
				if(activity == 'stamp'){
					activity = 'stamp colleting'
				}
				if (activity == 'basket'){
					activity = 'underwater basket weaving'
				}
				activities.push(activity);
			}
		}
		if(activities.length == 0) return;
		
	// Create new table elements
	let newRow = document.createElement('tr');
		let nameCell = document.createElement('td');
		let emailCell = document.createElement('td');
		let phoneCell = document.createElement('td');
		let bDCell = document.createElement('td');
		let favColCell = document.createElement('td');
		let genderCell = document.createElement('td');
		let actCell = document.createElement('td');
			let actList = document.createElement('ul');
				
	for(activity of activities){
		let e = document.createElement('li');
		actList.appendChild(e);
		e.innerHTML = activity;
	}

		actCell.appendChild(actList);

	// Append elements to table elements
	newRow.appendChild(nameCell).innerText = firstName;
	newRow.appendChild(emailCell).innerText = email;
	newRow.appendChild(phoneCell).innerText = phone;
	newRow.appendChild(bDCell).innerText = bday;
	newRow.appendChild(favColCell).innerText = favColor;
	newRow.appendChild(genderCell).innerText = gender;
	newRow.appendChild(actCell);

	// Append row to table
	console.log(newRow);
	
	document.getElementsByTagName('tbody')[0].appendChild(newRow);	

	// Empty form
	document.getElementById('firstname').value = '';
	document.getElementById('lastname').value = '';
	document.getElementById('email').value = '';
	document.getElementById('phone').value = '';
	document.getElementById('bday').value = '';
	document.getElementById('color').value = '#000000';
	document.getElementsByName('gender').checked = false;
	document.getElementsByClassName('activity').checked = false;
	document.getElementById('planet').selectedIndex = 0;

	for (option of document.getElementsByName('gender')){
		option.checked = false;
	};
	for (option of document.getElementsByClassName('activity')){
		option.checked = false;
	}
};

document.getElementById('form-sub').addEventListener('click', getInfo);

// #5) Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. The details should be hidden when the mouse is removed from the summary.

// #6) Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.

// #7) Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked. 

// #8) Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)

// #9) When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.

// #10) Define function walkTheDom(node, func)
// 	This function should traverse every node in the DO
//	Use recursion. On each node, calle func(node).
