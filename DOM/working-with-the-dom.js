/* 
    #1
    Make each link direct the user to its respective website 
*/
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

/* 
    #2
    Disable the Pluto Planet of Residency option. 
*/
let disablePluto = document.getElementById('planet');
disablePluto.options[3].setAttribute('disabled', false);

/* 
    #3
    Define a function alienText() which shows the hidden element 
    displaying an alien message. When any planet other than Earth is selected, 
    execute this function.
*/
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

/* 
    #4
    When the submit button is pressed, get the values 
    from all of the input into a new row in the table below.  
    Make sure no input is empty, check that first and last name 
    are at least two letters each. Validate for valid phone number 
    and email structure. This should continue to work for 
    multiple entries and rows. 
*/
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
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !emailRegex.test(email)){
        return;
    };
    let phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)){
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

    document.getElementsByTagName('tbody')[0].appendChild(createdRow); // appending the created row into the tbody
    
    // append values into the newly created row
    createdRow.appendChild(createdFn);
    createdRow.appendChild(createdEmail);
    createdRow.appendChild(createdPhone);
    createdRow.appendChild(createdBday);
    createdRow.appendChild(createdColor);
    createdRow.appendChild(createdGender);
    createdRow.appendChild(createdActivitiesCell);
    createdActivitiesCell.append(createdActivitiesUL);

    // Fill the html values
    createdFn.innerHTML = fn; 
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

/* 
    #5
    Create a function openDetails() which opens the details element. 
    Invoke this function when the details’ summary is moused over. 
    The details should be hidden when the mouse is removed from the summary.
*/
function openDetails(){
    document.getElementsByTagName('details')[0].setAttribute('open', true);
}
document.getElementsByTagName('details')[0].addEventListener('mouseover', openDetails);

function hideDetails(){
    document.getElementsByTagName('details')[0].removeAttribute('open');
}
document.getElementsByTagName('details')[0].addEventListener('mouseout', hideDetails);

/* 
    #6
    Create a function that concatenates the inner HTML of all of the span elements 
    and prints the results to the console 
*/
function concatSpan () {
    let span = document.getElementsByTagName('span');
    let concatString = '';
    for (let i of span) {
        concatString += i.innerHTML;
    }
    // console.log(concatString);   
}
concatSpan();

/* 
    #7
    Create a function that displays the current time on earth in the span with 
    id “earth_time”. Invoke this function when “Earth time” button is clicked. 
*/
let earthBtn = document.getElementById('earth_time_check');
function displayEarth() {
    let timePlacer = document.getElementById('earth_time');
    let newSpan = document.createElement('span');
    let today = new Date();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    timePlacer.appendChild(newSpan);
    newSpan.innerHTML = currentTime;
    document.getElementById('earth_time').value = '';
}
earthBtn.addEventListener('click', displayEarth);
document.getElementsByTagName
/* 
    #8 
    Three seconds after a user clicks on the “Intergalactic Directory” heading, 
    the background color should change to a random color. Make sure this color is 
    never black so we can still read our black text! (there are other dark colors 
    it could change to where we also couldn’t see the text but it’s enough to just 
    accomodate for a black background)
*/
let intergalacticDir = document.getElementsByTagName('h1')[0];
function headingColorChange () {
    setTimeout (() => {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);

        let randColor = 'rgb(' + R + ',' + G + ',' + B + ')';

        if(randColor !== 'rgb(0,0,0)'){
            document.getElementsByTagName('h1')[0].style.backgroundColor = randColor;
        }
    }, 3000)
}
intergalacticDir.addEventListener('click', headingColorChange);

/* 
    #9
    When inputs with id n1 and n2 have valid numerical input, 
    perform the operation specified in the select. Display the result 
    in the element with id result. 
*/
function calculator(){

    let n1 = +document.getElementById('n1').value; 
    let n2 = +document.getElementById('n2').value; 
    let operatorDropdown = document.getElementById('operation');
    let typeOfOperation = operatorDropdown.options[operatorDropdown.selectedIndex].text;
    let result = document.getElementById('result');
    
    if (!n1 || !n2) return;

    if (typeOfOperation === 'Add'){
        result.innerHTML = n1 + n2;
    }

    if (typeOfOperation === 'Subtract'){
        result.innerHTML = n1 - n2;
    }

    if (typeOfOperation === 'Multiply'){
        result.innerHTML = n1 * n2;
    }

    if (typeOfOperation === 'Divide'){
        result.innerHTML = n1 / n2;
    }

}

document.getElementById('n1').addEventListener('blur', calculator);
document.getElementById('n2').addEventListener('blur', calculator);

/* 
    #10
    Define function walkTheDom(node, func)
    This function should traverse every node in the DOM. 
    Use recursion. On each node, calle func(node).
*/

function walkTheDom(node, func){
    node = node.firstChild; // initializing the first node   
    func(node);
    // while a node still exists in the file
    while(node){
        walkTheDom(node,func); // call the walkTheDom 
        node = node.nextSibling; // and then move to the next sibling
    }
}
walkTheDom(document.getElementsByTagName('body')[0], node => console.log(node));