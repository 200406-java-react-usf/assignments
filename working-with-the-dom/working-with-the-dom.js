//1 - Make each link direct the user to its respective website (see id)

document.getElementsByName('google')[0].setAttribute('href', 'https://google.com/' );
document.getElementsByName('twitter')[0].setAttribute('href', 'https://twitter.com/');
document.getElementsByName('slack')[0].setAttribute('href', 'https://slack.com/');
document.getElementsByName('javadocs')[0].setAttribute('href', 'https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html');

document.getElementsByName('google')[0].innerHTML = 'Google';
document.getElementsByName('twitter')[0].innerHTML = 'Twitter';
document.getElementsByName('slack')[0].innerHTML = 'Slack';
document.getElementsByName('javadocs')[0].innerHTML = 'JavaDocs';

//2 - Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)

document.getElementById('planet').options[3].disabled = true;

//3 - Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.

function alienText() {

    elem = document.getElementById('planet');
    elemText = elem.options[elem.selectedIndex].text;

    alienElem = document.querySelector("p[hidden]");
    earthElem = document.querySelectorAll("p")[5];
    

    if(elemText != "Earth"){
        alienElem.removeAttribute("hidden");
        
    } else {
        earthElem.setAttribute("hidden", true);
    }

    console.log(elemText)
}

document.getElementById('planet').addEventListener('click', alienText);

//4 - When the submit button is pressed, get the values from all of the input into a new row in the table below.  Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.


function getInfo(){

    let fn = document.getElementById('firstname').value;
    if(!fn || fn.length < 2) return;
    let ln = document.getElementById('lastname').value;
    if(!ln || ln.length < 2) return;
    let email = document.getElementById('email').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email || !emailRegex.test(email)) return;
    let phone = document.getElementById('phone').value;
    let phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(!phone || !phoneRegex.test(phone)) return;
    let dob = document.getElementById('bday').value;
    //could change format
    if(!dob) return;
    let planet = document.getElementById('planet').options[document.getElementById('planet').selectedIndex].text;
    let gender;
    for(option of document.getElementsByName('gender')){
        if (option.checked) {

            if(option.value == 'female'){
                option.value = "Female";
            } if(option.value == 'male'){
                option.value = "Male";
            } if(option.value == 'other'){
                option.value = 'Other';
            }

            gender = option.value;
        }
    }
    if(!gender) return;
    let color = document.getElementById('color').value;
    let activities = [];
    for(option of document.getElementsByClassName('activity')){
        if (option.checked) {

            if(option.value == 'stamp'){
                option.value = 'stamp collecting';
            } if(option.value == "underwater basket weaving") {
                option.value = 'underwater basket weaving';
            }

            activities.push(option.value);
        }
    }
    console.log(activities)
    if(activities === []) return;

    let newRow = document.createElement('tr');
    
    let ename = document.createElement('td');
    let eemail = document.createElement('td');
    let ephone = document.createElement('td');
    let ebirthday = document.createElement('td');
    let ecolor = document.createElement('td');
    let egender = document.createElement('td');
    let eactivities = document.createElement('td');
    let actlist = document.createElement('ul');

    newRow.appendChild(ename);
    newRow.appendChild(eemail);
    newRow.appendChild(ephone);
    newRow.appendChild(ebirthday);
    newRow.appendChild(ecolor);
    newRow.appendChild(egender);
    newRow.appendChild(eactivities);
    eactivities.appendChild(actlist);

    document.getElementsByTagName('tbody')[0].appendChild(newRow);


    ename.innerText = fn;
    eemail.innerText = email;
    ephone.innerText = phone;
    ebirthday.innerText = dob;
    ecolor.innerText  = color;
    egender.innerText = gender;

    for(item of activities){
        let e = document.createElement('li');
        actlist.appendChild(e);
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
    for (option of document.getElementsByClassName('activity')) {
        option.checked = false;
    }
}

document.getElementById('form-sub').addEventListener('click', getInfo);

//5 - Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. The details should be hidden when the mouse is removed from the summary.


//6 - Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.


//7 - Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked. 


//8 - Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)


//9 - When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.


//10 - Define function walkTheDom(node, func) This function should traverse every node in the DOM. Use recursion. On each node, calle func(node).


