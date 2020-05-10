/*
    Scotty Thoms
    Working with the DOM assignment
    
*/

// 1. Make each link direct the user to its respective website (see id)
    document.getElementsByName('google')[0].href = "https://google.com/";
    document.getElementsByName('google')[0].innerText = 'Google';
    document.getElementsByName('twitter')[0].href = "https://twitter.com";
    document.getElementsByName('twitter')[0].innerText = 'Twitter';
    document.getElementsByName('slack')[0].href = "https://slack.com";
    document.getElementsByName('slack')[0].innerText = 'Slack';
    document.getElementsByName('javadocs')[0].href = "https://javadocs.com";
    document.getElementsByName('javadocs')[0].innerText = 'JavaDocs';

// 2. Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!! Dwarf Planets are planets too)
    document.getElementById('planet')[3].disabled = true;

// 3. Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.
    function alientText() {
        let text = document.querySelector("p[hidden]");
        let menu = document.getElementById('planet');
        if ( (menu.options[menu.selectedIndex].text) != 'Earth') {
            text.removeAttribute('hidden');
        } 
    };

    document.getElementById('planet').addEventListener('click', alientText);

// 4. When the submit button is pressed, get the values from all of the input into a new row in the table below.  Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.
    function getInfo() {
        // Getting info from the form
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let birthday = document.getElementById('bday').value;
        let homePlanet = document.getElementById('planet').value;
        let gender;
        for (option of document.getElementsByName('gender')) {
            if (option.checked) {
                gender = option.value;
                if (gender === 'male') gender = 'Male';
                if (gender === 'female') gender = 'Female';
                if (gender === 'other') gender = 'Other';
            }
        }
        let favColor = document.getElementById('color').value;
        let activities = [];
        for (option of document.getElementsByClassName('activity')) {
            if (option.checked) {
                activity = option.value;
                if (activity == 'stamp') activity = 'stamp collecting';
                if (activity == 'basket') activity = 'underwater basket weaving';
                activities.push(activity);
            }
        }

        // Checking to see if the info is valid
        if (activities.length === 0) return;
        if (!firstname || firstname.length < 2) return;
        if (!lastname || lastname.length < 2) return;
        let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !emailTest.test(email)) return;
        let phoneTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (!phone || !phoneTest.test(phone)) return;
        if (!birthday) return;
        if (!homePlanet) return;
        if (!gender) return;

        // Creating a table
        let newRow = document.createElement('tr');
        let nameCell = document.createElement('td');
		let emailCell = document.createElement('td');
		let phoneCell = document.createElement('td');
		let bDCell = document.createElement('td');
		let favColCell = document.createElement('td');
		let genderCell = document.createElement('td');
		let actCell = document.createElement('td');
        let actList = document.createElement('ul'); 
        for (activity of activities) {
            let e = document.createElement('li');
            actList.appendChild(e);
            e.innerHTML = activity;
        }
        actCell.appendChild(actList);

        // Append elements to table elements
        newRow.appendChild(nameCell).innerText = firstname;
        newRow.appendChild(emailCell).innerText = email;
        newRow.appendChild(phoneCell).innerText = phone;
        newRow.appendChild(bDCell).innerText = birthday;
        newRow.appendChild(favColCell).innerText = favColor;
        newRow.appendChild(genderCell).innerText = gender;
        newRow.appendChild(actCell);

        // Append row to table
        document.getElementsByTagName('tbody')[0].appendChild(newRow);

        // Empty form after successful entry 
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
    }

    document.getElementById('form-sub').addEventListener('click', getInfo);

// 5. Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. The details should be hidden when the mouse is removed from the summary.
    function openDetails() {
        details.setAttribute('open', true);
    };

    let details = document.querySelector('details');
    details.addEventListener('mouseover', openDetails);
    details.addEventListener('mouseleave', () => details.removeAttribute('open'));

// 6. Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.
    function combineInnerElements() {
        let allspan = document.getElementsByTagName('span');
        let printout = '';
        for (let i of allspan) {
            printout = printout + ' ' + i.innerText;
        }
        console.log(printout);
    }

    combineInnerElements();

// 7. Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked. 
    function displayCurrentTime() {
        document.getElementById('earth_time').innerHTML = new Date();
    }

    document.getElementById('earth_time_check').addEventListener('click', displayCurrentTime);

// 8. Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)
    let heading = document.querySelector('div.container > h1');

    heading.addEventListener('click', () => {
        setTimeout( () => {
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            // if the random color is black, it will just change to dark gray for an easy fix (not best implementation)
            if (randomColor === '#000000') randomColor = '#A9A9A9';

            document.body.style.backgroundColor = randomColor;
        }, 3000)
    });

// 9. When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.
    function operation() {
        let e = document.getElementById('operation');
        let selected = e.options[e.selectedIndex].text;

        let n1 = +document.getElementById('n1').value;
        let n2 = +document.getElementById('n2').value;

        if (typeof n1 === 'number' && typeof n2 === 'number') {
            if (selected === 'Add') result = n1 + n2;
            if (selected === 'Subtract') result = n1 - n2;
            if (selected === 'Multiply') result = n1 * n2;
            if (selected === 'Divide') result = n1 / n2;

            document.getElementById('result').innerText = result;
        } 

        if (document.getElementById('result').innerText === 'NaN') {
            document.getElementById('result').innerText = 'Please enter valid numbers to continute.';
        }
    }

    document.getElementById('n1').addEventListener('blur', operation);
    document.getElementById('n2').addEventListener('blur', operation);
    document.getElementById('operation').addEventListener('blur', operation);


// 10. Define function walkTheDom(node, func)
// 	    This function should traverse every node in the DOM. 
// 	    Use recursion. On each node, calle func(node).

    function walkTheDom(node, func) {

        func(node);

        node = node.firstChild;
        while (node) {
            walkTheDom(node, func);
            node = node.nextSibling;
        }
    }
    
    // Used for testing to make sure it works
    //walkTheDom(document.getElementsByTagName('body')[0], (node) => console.log(node));

