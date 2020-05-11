//Problem 1

//set up query selector
let google = document.querySelector('a[name^="google"]');
let twitter = document.querySelector('a[name^="twitter"]');
let slack = document.querySelector('a[name^="slack"]');
let javadocs = document.querySelector('a[name^="javadocs"]');

//set up links
//google
google.innerHTML = "Google"; //text enclosed by a tags
google.setAttribute('href', 'http://www.google.com'); // href link
google.setAttribute('target', '_blank'); // opens in new page
//twitter
twitter.innerHTML = "Twitter";
twitter.setAttribute('href', 'http://www.twitter.com');
twitter.setAttribute('target', '_blank');
//slack
slack.innerHTML = "Slack";
slack.setAttribute('href', 'http://www.slack.com');
slack.setAttribute('target', '_blank');
//twitter
javadocs.innerHTML = "Javadocs";
javadocs.setAttribute('href', 'https://docs.oracle.com/en/java/');
javadocs.setAttribute('target', '_blank');

//Problem 2

let pluto = document.querySelector('#planet > option:nth-child(4)');
pluto.setAttribute('disabled', true);


//Problem 3
let earth = document.querySelector('#planet > option:nth-child(1)');
let mars = document.querySelector('#planet > option:nth-child(2)');
let pcb = document.querySelector('#planet > option');
let hidden_msg = document.querySelector('.container > p');
let planets = document.getElementById('planet')

//function to remove hidden attribute
function alienText() {

    if(planets.value == earth.innerHTML){
        hidden_msg.setAttribute('hidden', true);
    } else{
        hidden_msg.removeAttribute('hidden');
    }
}
planets.addEventListener('change', alienText);

//Problem 4
let submitBtn = document.getElementById('form-sub');
let fname = document.getElementById('firstname');
let lname = document.getElementById('lastname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let bday = document.getElementById('bday');
let gender = document.querySelectorAll('input[name="gender"]');
let color = document.getElementById('color');
let activities = document.querySelectorAll('input[class="activity"]')
//make sure all inputs not empty
fname.setAttribute('required', true);
lname.setAttribute('required', true);
email.setAttribute('required', true);
phone.setAttribute('required', true);
bday.setAttribute('required', true);
color.setAttribute('required', true);

//format inputs
fname.setAttribute('minlength', 2);
lname.setAttribute('minlength', 2);
email.setAttribute('pattern','[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
phone.setAttribute('pattern','[0-9]{3}-[0-9]{3}-[0-9]{4}');

//on submit click add row to table
submitBtn.addEventListener('click', addNewRow);

function addNewRow(){
    let form = document.querySelector('form.form-group');
    
    //validation of buttons
    let invalidradio, invalidcheck;
    for(const radio of gender) {
        if(radio.checked){
            invalidradio = true;
            break;
        }
        else{
            invalidradio = false;
        }
    }

    for(const check of activities) {
        if(check.checked){
            invalidcheck = true;
        }
        else{
            invalidcheck = false;
        }

        //check validity 
        if(fname.validity.valid && lname.validity.valid && 
        email.validity.valid && bday.validity.valid && invalidradio
        && invalidcheck){
            //create new cells
            let namecell = document.createElement('td');
            let emailcell = document.createElement('td');
            let phonecell = document.createElement('td');
            let bdaycell = document.createElement('td');
            let colorcell = document.createElement('td');
            let gendercell = document.createElement('td');
            let activitescell = document.createElement('td');
            let newEntry = document.createElement('tr');

            let unorder = document.createElement('ul');
            activitescell.appendChild(unorder);
            
            //add cells to new row
            newEntry.appendChild(namecell);
            newEntry.appendChild(emailcell);
            newEntry.appendChild(phonecell);
            newEntry.appendChild(bdaycell);
            newEntry.appendChild(colorcell);
            newEntry.appendChild(gendercell);
            newEntry.appendChild(activitescell);
            
            //add new row to the table
            let table = document.querySelector('table.table');
            table.appendChild(newEntry);
            table.setAttribute('scope','col');
            
            //assign values to the cells
            for(const radio of gender) {
                if(radio.checked){
                    gendercell.innerText = radio.value;
                    break;
                }
            }
            for(const check of activities) {
                if(check.checked){
                    let listItem = document.createElement('li');
                    listItem.innerText = check.value;
                    unorder.appendChild(listItem);
                }
            }
            namecell.innerText = `${fname.value} and ${lname.value}`;
            emailcell.innerText = email.value;
            phonecell.innerText = phone.value;
            formatdate = new Date(bday.value);
            bdaycell.innerText = new Date(formatdate.getTime() - formatdate.getTimezoneOffset() * -60000 ).toDateString();
            colorcell.innerText = color.value;
    
            //clear cells for next entry
            fname.value = '';
            lname.value = '';
            email.value = '';
            phone.value = '';
            bday.value = '';
            color.value = '#000000';
    
    
        }
    } 
}
//Problem 5

let details = document.querySelector('details');
details.addEventListener("mouseover", openDetails);
details.addEventListener("mouseleave", () => details.open = false);

function openDetails() {
    details.open = true;
}

//Problem 6
function concatSpans() {
    let spanTags = document.getElementsByTagName('span');
    let text = '';
    for (const spn of spanTags){
        text = text + spn.innerHTML;
    }
    console.log(text);
}
concatSpans();

//Problem 7
let earthtime = document.getElementById('earth_time_check');
let earthdisplay = document.getElementById('earth_time');
earthtime.addEventListener("click", () => {
    earthdisplay.innerHTML = new Date(Date.now());
})


//Problem 8
let heading = document.querySelector('h1');

heading.addEventListener('click', ()=>{
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

operation.addEventListener('change', () => {
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
function walkTheDom(){
    //something
}

