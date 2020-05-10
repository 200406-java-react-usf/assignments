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



//Problem 4
let submitBtn = document.getElementById('form-sub');
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
email.setAttribute('pattern','[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
firstName.setAttribute('minlength', 2);
lastName.setAttribute('minlength', 2);
phone.setAttribute('required',true);
phone.setAttribute('pattern','[0-9]{3}-[0-9]{3}-[0-9]{4}');
bday.setAttribute('required', true);


submitBtn.addEventListener('click', addRow);

function addRow() {
    let form = document.querySelector('form.form-group');
    let invalidrb, invalidcb;
    for(const rb of rdoBtn) {
        if(rb.checked){
            invalidrb = true;
            break;
        }
        else{
            invalidrb = false;
        }
    }

    for(const cb of chkBtn) {
        if(cb.checked){
            invalidcb = true;
            break;
        }
        else{
            invalidcb = false;
        }
    }

    if(firstName.validity.valid && lastName.validity.valid && 
        email.validity.valid && bday.validity.valid && invalidrb
            && invalidcb){
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


        namecell.innerText = `${firstName.value} and ${lastName.value}`;
        emailcell.innerText = email.value;
        phonecell.innerText = phone.value;
        formatdate = new Date(bday.value);
        bdaycell.innerText = new Date(formatdate.getTime() - formatdate.getTimezoneOffset() * -60000 ).toDateString();
        fcolorcell.innerText = fcolor.value;

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        phone.value = '';
        bday.value = '';
        fcolor.value = '#000000';


    }

}

//Problem 5
let details = document.querySelector('details');
details.addEventListener("mouseover", openDetails);
details.addEventListener("mouseleave", () => details.removeAttribute('open'));

function openDetails() {
    details.setAttribute('open', true);
}


//Problem 6

let allspan = document.getElementsByTagName("span");
let fulltext = '';
for(const spn of allspan){
    fulltext = fulltext + " " + spn.innerHTML;
}
console.log(fulltext);

//Problem 7 
let earthtime = document.getElementById('earth_time_check');
let earthdisplay = document.getElementById('earth_time');
earthtime.addEventListener("click", () => {
    earthdisplay.innerHTML = new Date(Date.now());
})

//Problem 8
let heading = document.querySelector("div.container > h1");

heading.addEventListener("click", () => {
    setTimeout(()=> {
        let randomColor;
        let toodark = 5242880;
        toodark.toString(16);
        do{
            randomColor = Math.floor(Math.random()*16777215).toString(16);
        }while(randomColor < toodark);

        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;

    },3000);
});

//Problem 9 

let operation = document.getElementById('operation');
let result = document.getElementById('result');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
n1.setAttribute('min',1);
n2.setAttribute('min',1);
n1.setAttribute('required', true);
n2.setAttribute('required', true);
let addition = document.querySelector('#operation > option:nth-child(1)');
let substraction = document.querySelector('#operation > option:nth-child(2)');
let divided = document.querySelector('#operation > option:nth-child(3)');
let multiply = document.querySelector('#operation > option:nth-child(4)');

operation.addEventListener("click", () => {
    if(n1.validity.valid && n2.validity.valid){
        if(operation.value == addition.innerHTML){
        result.innerHTML = parseInt(n1.value) + parseInt(n2.value);
        }
        else if(operation.value == substraction.innerHTML){
            result.innerHTML = parseInt(n1.value) - parseInt(n2.value);
        }
        else if(operation.value == divided.innerHTML){
            result.innerHTML = parseInt(n1.value) / parseInt(n2.value);
        }
        else if(operation.value == multiply.innerHTML){
            result.innerHTML = parseInt(n1.value) * parseInt(n2.value);
        }
    }
    
});

//Problem 10

walkTheDom(document.documentElement.children);
function walkTheDom(htmlnode){
    for(let parents of htmlnode ){
        console.log(parents);
        for(let childs of parents.children){
            console.log(childs);
            for(let desecendants of childs.children){
                console.log(desecendants);
            }
        }
    };
};