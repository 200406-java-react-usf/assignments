//Problem 1
let google = document.querySelector('a[name^="google"]');
let twitter = document.querySelector('a[name^="twitter"]');
let slack = document.querySelector('a[name^="slack"]');
let javadocs = document.querySelector('a[name^="javadocs"]');
google.innerHTML = "Google";
google.setAttribute('href','http://www.google.com');
google.setAttribute('target','_blank');
twitter.innerHTML = "Twitter";
twitter.setAttribute('href','http://www.twitter.com');
twitter.setAttribute('target','_blank');
slack.innerHTML = "Slack";
slack.setAttribute('href','http://www.slack.com');
slack.setAttribute('target','_blank');
javadocs.innerHTML = "Javadocs";
javadocs.setAttribute('href','https://docs.oracle.com/javase/8/docs/api/');
javadocs.setAttribute('target','_blank');

//Problem 2
let x =  document.querySelector('#planet > option:nth-child(4)');
x.setAttribute('disabled', true);

let earth = document.querySelector('#planet > option:nth-child(1)');
let mars = document.querySelector('#planet > option:nth-child(2)');
let pcb = document.querySelector('#planet > option:nth-child(3)');
let hidden_msg = document.querySelector('br ~ p');
let planets = document.getElementById('planet');

//Problem 3
function alienText() {
        if(planets.value == mars.innerHTML || planets.value == pcb.innerHTML){
            hidden_msg.removeAttribute('hidden');
        }
        if(planets.value == earth.innerHTML){
            hidden_msg.setAttribute('hidden', true);
        }
        
    
}

planets.addEventListener('click', alienText);
console.log(mars.getAttribute('selected'));

let submitBtn = document.getElementById('form-sub');
let form = document.getElementsByClassName('form-control');


let rdoBtn = document.querySelectorAll('input[name="gender"]');
let chkBtn = document.querySelectorAll('input[class="activity"]');


let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let bday = document.getElementById('bday');
let fcolor = document.getElementById('color');

firstName.setAttribute('required', true);
lastName.setAttribute('required', true);
email.setAttribute('required', true);
//email.setAttribute('pattern','[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,5}')
firstName.setAttribute('min', 2);
lastName.setAttribute('min', 2);

submitBtn.addEventListener('click', addRow);
console.log(form);

function addRow() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let bday = document.getElementById('bday');
    let fcolor = document.getElementById('color');

    if(firstName.value && lastName.value && email.value && phone.value && bday.value && fcolor.value){
        let namecell = document.createElement('td');
        let emailcell = document.createElement('td');
        let phonecell = document.createElement('td');
        let bdaycell = document.createElement('td');
        let fcolorcell = document.createElement('td');
        let gendercell = document.createElement('td');
        let activitescell = document.createElement('td');
        let newEntry = document.createElement('tr');
        let unorder = document.createElement('ul');
        

        activitescell.appendChild(unorder);
        
        newEntry.appendChild(namecell);
        newEntry.appendChild(emailcell);
        newEntry.appendChild(phonecell);
        newEntry.appendChild(bdaycell);
        newEntry.appendChild(fcolorcell);
        newEntry.appendChild(gendercell);
        newEntry.appendChild(activitescell);

        let table = document.querySelector('table.table');
        table.appendChild(newEntry);
        table.setAttribute('scope','col');

        for(const rb of rdoBtn) {
            if(rb.checked){
                gendercell.innerText = rb.value;
                break;
            }
        }

        for(const cb of chkBtn) {
            if(cb.checked){
                let listItem = document.createElement('li');
                listItem.innerText = cb.value;
                unorder.appendChild(listItem);
            }
        }


        namecell.innerText = `${firstName} and ${lastName}`;
        emailcell.innerText = email;
        phonecell.innerText = phone;
        bdaycell.innerText = bday;
        fcolorcell.innerText = fcolor;

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        phone.value = '';
        bday.value = '';
        fcolor.value = '#000000';


    }

}