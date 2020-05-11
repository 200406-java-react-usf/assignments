/**
 * Problem 1
 * Make each link direct the user to its respective website (see id)
 */
document.getElementsByName('google')[0].setAttribute("href", "https://www.google.com/");
document.getElementsByName('google')[0].innerHTML = "Google";

document.getElementsByName('twitter')[0].setAttribute("href", "https://twitter.com/");
document.getElementsByName('twitter')[0].innerHTML = "Twitter";

document.getElementsByName('slack')[0].setAttribute("href", "https://slack.com/");
document.getElementsByName('slack')[0].innerHTML = "Slack";

document.getElementsByName('javadocs')[0].setAttribute("href", "https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html");
document.getElementsByName('javadocs')[0].innerHTML = "Javadocs";


/**
 * Problem 2
 * Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)
 */

document.getElementById('planet').options[3].disabled = true;

/**
 * Problem 3
 * Define a function alienText() which shows the hidden element displaying an alien message. 
 * When any planet other than Earth is selected, execute this function.
 */
function alienText() {
    let e = document.getElementById('planet');
    let text = e.options[e.selectedIndex].text;
    let target = document.querySelector('p[hidden]');

    if (text != 'Earth') {
        target.removeAttribute('hidden');
    } else {
        document.getElementsByTagName('p')[5].setAttribute('hidden', true);
    }
}
document.getElementById('planet').addEventListener('click', alienText);

/**
 * Problem 4
 * When the submit button is pressed, 
 * get the values from all of the input into a new row in the table below.  
 * Make sure no input is empty, check that first and last name are at least two letters each. 
 * Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.
 */


function getInfo() {
    let fn = document.getElementById('firstname').value;
    if (!fn || fn.length < 2) return 'first name not working';

    let ln = document.getElementById('lastname').value;
    if (!ln || ln.length < 2) return 'lastname not working ';

    let email = document.getElementById('email').value;
    let emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !emailTest.test(email)) return 'email not working';

    let phoneNumber = document.getElementById('phone').value;
    let phoneTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phoneNumber || !phoneTest.test(phoneNumber)) return 'phone number not working';

    let bday = document.getElementById('bday').value;
    if (!bday) return 'bday not working ';

    let allPlanet = document.getElementById('planet');
    let currentPlanet = allPlanet.options[allPlanet.selectedIndex].text;
    if (!currentPlanet) return 'planet not working';

    let gender;
    for (option of document.getElementsByName('gender')) {
        if (option.checked) {
            gender = option.value;
            if (gender == "male") { gender = "Male"; };
            if (gender == "female") { gender = "Female" }
        }
    }
    if (!gender) return 'gender not working';

    let favColor = document.getElementById('color').value;
    if (!favColor) return 'color not working';

    let activities = [];
    for (option of document.getElementsByClassName('activity')) {
        if (option.checked) {
            activity = option.value;
            if (activity == 'stamp') {
                activity = 'stamp collecting'
            }
            if (activity == 'basket') {
                activity = 'underwater basket weaving'
            }
            activities.push(activity);
        }
    }
    console.log(activities);
    if (activities.length == 0) return 'activities not working';


    let row = document.createElement('tr');
    let fnCell = document.createElement('td');
    let emailCell = document.createElement('td');
    let phoneCell = document.createElement('td');
    let bdCell = document.createElement('td');
    let colorCell = document.createElement('td');
    let genderCell = document.createElement('td');
    let activityCell = document.createElement('td');
    let activityList = document.createElement('ul');

    activityCell.append(activityList);
    console.log(activityCell);

    row.appendChild(fnCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    row.appendChild(bdCell);
    row.appendChild(colorCell);
    row.appendChild(genderCell);
    row.appendChild(activityCell);

    document.getElementsByTagName('tbody')[0].appendChild(row);

    fnCell.innerText = fn;
    emailCell.innerText = email;
    phoneCell.innerText = phoneNumber;
    bdCell.innerText = bday;
    colorCell.innerText = favColor;
    genderCell.innerText = gender;

    for (item of activities) {
        let e = document.createElement('li');
        activityList.appendChild(e);
        e.innerHTML = item;
    }

    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('bday').value = '';
    document.getElementById('color').value = '';
    document.getElementById('planet').selectedIndex = 0;

    for (option of document.getElementsByName('gender')) {
        option.checked = false;
    }
    for (option of document.getElementsByClassName('activity')) {
        option.checked = false;
    }
}
document.getElementById('form-sub').addEventListener('click', getInfo);


/**
 * Problem 5
 * Create a function openDetails() which opens the details element. 
 * Invoke this function when the details’ summary is moused over. 
 * The details should be hidden when the mouse is removed from the summary.
 */
function open() {
    document.querySelector("details").setAttribute("open", true);
}

function close() {
    document.querySelector("details").removeAttribute("open");
}
document.querySelector("summary").addEventListener("mouseenter", open);
document.querySelector("summary").addEventListener("mouseleave", close);

/**
 * Problem 6
 * Create a function that concatenates the inner HTML of 
 * all of the span elements and prints the results to the console.
 */
let span = document.getElementsByTagName("span");
let results = ''
for (let i = 0; i < span.length; i++) {
    results += span[i].innerHTML;
}
console.log(results);

/**
 * Problem 7
 * Create a function that displays the current time on earth in the span with id “earth_time”. 
 * Invoke this function when “Earth time” button is clicked. 
 */
document.getElementById('earth_time_check').addEventListener('click', () => {
    let currentTime = new Date();
    document.getElementById('earth_time').innerHTML = currentTime.toLocaleTimeString();
})

/**
 * Problem 8
 * Three seconds after a user clicks on the “Intergalactic Directory” heading, 
 * the background color should change to a random color.
 * Make sure this color is never black so we can still read our black text! 
 * (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)
 */
function changeColor() {
    setTimeout(() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        if (randColor !== 'rgb(0,0,0)') {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-color: ' + randColor);
        }
    }, 3000);

}
document.getElementsByTagName('h1')[0].addEventListener('click', changeColor);

/**
 * Problem 9
 * When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. 
 * Display the result in the element with id result.
 */
function calculator() {

    let results;
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if (document.getElementById("operation").value == "Add")
        results = n1 + n2;

    else if (document.getElementById("operation").value == "Subtract")
        results = n1 - n2;

    else if (document.getElementById("operation").value == "Divide")
        results = n1 / n2;

    else if (document.getElementById("operation").value == "Multiply")
        results = n1 * n2;

    document.getElementById("result").innerHTML = results;

}


document.getElementById("n1").addEventListener("input", calculator);
document.getElementById("n2").addEventListener("input", calculator);

/**
 * Define function walkTheDom(node, func) This function should traverse every node in the DOM.
 *  Use recursion. On each node, called func(node).
 */

function walkTheDom(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDom(node, func);
        node = node.nextSibling
    }
}