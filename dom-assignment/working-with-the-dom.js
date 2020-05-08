/* ONE */

let googleLink = document.getElementsByName('google');

googleLink[0].setAttribute('href', 'http://www.google.com');

googleLink[0].innerHTML = 'Google ';

let twitterLink = document.getElementsByName('twitter');

twitterLink[0].setAttribute('href', 'http://www.twitter.com');

twitterLink[0].innerHTML = 'Twitter ';

let slackLink = document.getElementsByName('slack');

slackLink[0].setAttribute('href', 'http://www.slack.com');

slackLink[0].innerHTML = 'Slack ';

let javaLink = document.getElementsByName('javadocs');

javaLink[0].setAttribute('href', 'https://docs.oracle.com/javase/7/docs/api/');

javaLink[0].innerHTML = 'Java Docs ';


/* TWO */

document.getElementById('planet')[3].disabled = true;

/* THREE */

function alienText(){

    let alientext = document.querySelector("p[hidden]");

    let dropDrown = document.getElementById('planet');

    let innerText = dropDrown.options[dropDrown.selectedIndex].text; 

    if( innerText != 'Earth'){
        alientext.removeAttribute('hidden');
    } 

};

document.getElementById('planet').addEventListener('click', alienText);

/* FOUR */

function getInfo(){

    let fn = document.getElementById('firstname').value;
    if (!fn || fn.length < 2) return;

    let ln = document.getElementById('lastname').value;
    if(!ln || ln.length < 2) return;

    let email = document.getElementById('email').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email || !emailRegex.test(email)) return;

    let phone = document.getElementById('phone').value;
    let phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phone || !phoneRegex.test(phone)) return;

    let dob = document.getElementById('bday').value;
    if(!dob) return;

    let dropDown = document.getElementById('planet');
    let residency = dropDown.options[dropDown.selectedIndex].text;

    let gender;
    for (option of document.getElementsByName('gender')){
        if(option.checked){
            gender = option.value;
        }
    }
    if(!gender) return;

    let color = document.getElementById('color').value;

    let activities = [];
    for (option of document.getElementsByClassName('activity')){
        if(option.checked){
            if(option.value === 'hiking'){
                activities.push('hiking');
            }
            if(option.value === 'stamp'){
                activities.push('stamp collecting');
            }
            if (option.value === 'birding'){
                activities.push('birding');
            }
            if (option.value === 'basket'){
                activities.push('underwater basket weaving');
            }
        }
    }
    if(activities.length === 0) return;

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
    phoneCell.innerText = phone;
    bdCell.innerText = dob;
    colorCell.innerText = color;
    genderCell.innerText = gender;

    for (activity of activities){
        let li = document.createElement('li');
        activityList.appendChild(li);
        li.innerHTML = activity;
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

document.getElementById('form-sub').addEventListener('click',getInfo);

/* FIVE */

function openDetails(){

    document.getElementsByTagName('details')[0].setAttribute('open', true);

}

function closeDetails(){

    document.getElementsByTagName('details')[0].removeAttribute('open');

}

document.getElementsByTagName('details')[0].addEventListener('mouseover', openDetails);
document.getElementsByTagName('details')[0].addEventListener('mouseout', closeDetails);

/* SIX */ 

function catSpan() {

    let spanString = '';

    for (span of document.getElementsByTagName('span')){

        spanString = spanString + span.innerHTML;

    }

    console.log(spanString);

}

catSpan();

/* SEVEN */

document.getElementById('earth_time_check').addEventListener('click', () => {

    let currentTime = new Date();

    document.getElementById('earth_time').innerHTML = currentTime.toLocaleTimeString();

});

/* EIGHT */

function changeColor(){

    setTimeout(() => {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let randColor = 'rgb(' + r + ',' + g + ',' + b + ')';

        if(randColor !== 'rgb(0,0,0)'){
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-color: ' + randColor);
        }

    }, 3000);    

}

document.getElementsByTagName('h1')[0].addEventListener('click', changeColor);

/* Nine */

//document.getElementById('n1')
