/**
 * Make each link direct the user to its respective website (see id)
 */

let google = document.getElementsByName('google');
google[0].setAttribute('href', 'https://google.com');

let twitter = document.getElementsByName('twitter');
twitter[0].setAttribute('href', 'https://twitter.com/');

let slack = document.getElementsByName('slack');
slack[0].setAttribute('href', 'https://slack.com/');

let javadocs = document.getElementsByName('javadocs');
javadocs[0].setAttribute('href', 'https://javadocs.com/');


/**
 * Disable the Pluto Planet of Residency option. 
 * (Pluto isn’t a planet!! Dwarf Planets are planets too)
 */


let selPlanet = document.getElementById('planet');
selPlanet.options[3].disabled = true;


 /**
  * Define a function alienText() which shows the hidden 
  * element displaying an alien message. When any planet other
  * than Earth is selected, execute this function.
  */

function alienText(){
  // console.log('here')
  let alienMsg = document.querySelector('div ~ p')

  alienMsg.removeAttribute('hidden');
  // console.log('made it here')
}

selPlanet.addEventListener('change', (e) => {
  selectElement = document.querySelector('#planet');
//   console.log(selectElement)

  index = selectElement.selectedIndex;
//   console.log(index)

  if(index > 0)     
  alienText();
})

  

  /**
   * When the submit button is pressed, get the values from 
   * all of the input into a new row in the table below.  
   * Make sure no input is empty, check that first and last name
   * are at least two letters each. Validate for valid phone number
   * and email structure. This should continue to work for multiple 
   * entries and rows.
   */

function addFields() {
  
  let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  let phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{0,4}$/;
  let isValidEmail;
  let isValidPhone;     

  let fname = document.getElementById('firstname').value;
  let lname = document.getElementById('lastname').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let bday = document.getElementById('bday').value;
  let radioGender = document.getElementsByName('gender');
  let gender;
  let date = new Date(bday);
  let chkActivity = document.getElementsByClassName('activity')
  let color = document.getElementById('color').value;
  //alert (date));
  let d = date.getDate()+1;
  if(d < 10) d = `0${d}`
  let m = date.getMonth() + 1;
  if (m < 10) m = `0${m}`
  let y = date.getFullYear();
  bday = `${m}/${d}/${y}`

  
  if (fname.length < 2) {
    document.getElementById('firstname').focus();
    alert('First name must be at least 2 characters!');
    document.getElementById('firstname').value = '';
    return;
  }

  if (lname.length < 2) {
    document.getElementById('lastname').focus();
    alert('Last name must be at least 2 characters!');
    document.getElementById('lastname').value = '';
    return;
  }

  if (emailRegex.test(email) == true) isValidEmail = true;
  if (phoneRegex.test(phone) == true) isValidPhone = true;

  if (!isValidEmail) {
    document.getElementById('email').focus();
    alert('Please provide a valid email!');
    document.getElementById('email').value = '';
    return;
  } 

  if (!isValidPhone) {
    document.getElementById('phone').focus();
    alert('Please provide a valid phone number!');
    document.getElementById('phone').value = '';
    return;
  } 

  if(!bday) {
    alert('You must provide your birthday!');
    document.getElementById('bday').value = '';
    return;
  }

  // console.log(isValidEmail);
  // console.log(isValidPhone);

  for (let i = 0; i<radioGender.length; i++) {
    if (radioGender[i].checked) 
    gender = radioGender[i].value;
  }
  if (!gender){
    alert('Please select a gender!');
    document.getElementsByName('gender')[0].focus();
    return;
  }

  let empty;
  let activities = document.querySelectorAll('input[type=checkbox]'); 
    empty = [].filter.call( activities, function( el ) {
    return !el.checked
  });

  if (activities.length == empty.length) {
    alert("Choose at least 1 activity!");
    return;
  }

  //create a new row and cells
  let row = document.createElement('tr');
  let Name = document.createElement('td');
  let Email = document.createElement('td');
  let Phone = document.createElement('td');
  let Birthday = document.createElement('td');
  let Color = document.createElement('td');
  let Gender = document.createElement('td');
  let Activities = document.createElement('td');   


  //append cells to new row
  row.appendChild(Name);
  row.appendChild(Email);
  row.appendChild(Phone);
  row.appendChild(Birthday);
  row.appendChild(Color);
  row.appendChild(Gender);
  row.appendChild(Activities);
    

  //append new row to table
  document.getElementsByTagName('table')[0].appendChild(row);

  //add student data to the newly created row
  Name.innerText = `${fname} ${lname}`;
  Email.innerText = email;
  Phone.innerText = phone;
  Birthday.innerText = bday;
  Color.innerText = color;
  Gender.innerText = gender;
  let ul = document.createElement('ul');
  
  for ( i = 0; i < chkActivity.length; i++) {
    if(chkActivity[i].checked) {
    let li = document.createElement('li');
    li.innerText = chkActivity[i].nextSibling.textContent;
    ul.appendChild(li);         
    }
  }

  Activities.appendChild(ul);
}    
    
document.getElementById('form-sub').addEventListener('click', addFields);


/**
* Create a function openDetails() which opens the details element.
* Invoke this function when the details’ summary is moused over.
* The details should be hidden when the mouse is removed from the summary.
*/

function openDetails() {
  document.getElementsByTagName('details')[0].open = true;
}
function closeDetails() {
  document.getElementsByTagName('details')[0].open = false;
}
document.getElementsByTagName('details')[0].addEventListener('mouseover', openDetails);
document.getElementsByTagName('details')[0].addEventListener('mouseout', closeDetails);

/**
 * Create a function that concatenates the inner HTML
 * of all of the span elements and prints the results to the console.     
 */

(function printSpan () {
  let span = document.getElementsByTagName('span');
  let catSpan = '';

  for (let i = 0; i < span.length; i++) {
    catSpan += span[i].innerHTML;
  }
  console.log(catSpan);
})()


  /**
  * Create a function that displays the current time on earth
  *  in the span with id “earth_time”. Invoke this function when
  *  “Earth time” button is clicked.
  */
function earthTime () {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById('earth_time').innerHTML = date + ' ' + currentTime;
}

document.getElementById('earth_time_check').addEventListener('click', earthTime);

/**
 * Three seconds after a user clicks on the “Intergalactic Directory” 
 * heading, the background color should change to a random color.
 * Make sure this color is never black so we can still read our black text! 
 * (there are other dark colors it could change to where we also couldn’t 
 * see the text but it’s enough to just accomodate for a black background)
 */

function intergalacticBackground () {
  setTimeout(() => {
    let color = ['0', '1', '2', '3', '4', '5', '6',
          '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    
    let count = 0;
    let background = '';

    while(count < 1 ) {
      background = '#';
      for (let i = 0; i < 6; i++) {
        let hash = Math.floor(Math.random()*16);
        count += hash;
        background += color[hash];
      }            
    }
    document.body.style.backgroundColor = background;
  }, 3000);
}

document.getElementsByTagName('h1')[0].addEventListener('click', intergalacticBackground);


/**
* When inputs with id n1 and n2 have valid numerical input, 
* perform the operation specified in the select. 
* Display the result in the element with id result.
*/

function calc () {
  let n1 = document.getElementById('n1').value;
  let n2 = document.getElementById('n2').value;
  let operation = document.getElementById('operation').value;
  let result;

  if (isNaN(n1) && n1 != '' || isNaN(n2) && n2 != '') {
    alert ('Insert 2 valid numbers!')
    document.getElementById('n1').focus();
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('result').innerHTML = '';
    return;
  }

  switch (operation) {
    case 'Divide': 
      result = n1 / n2;
      break;

    case 'Multiply':
      result = n1 * n2;
      break;
      
    case 'Subtract':
      result = n1 - n2;
      break;
    
    default:
    result = +n1 + +n2;
  }

  if(n1 !== '' && n2 !== '')
  document.getElementById('result').innerHTML = result;

};


document.getElementById('n1').addEventListener('input', calc);
document.getElementById('n2').addEventListener('input', calc);
document.getElementById('operation').addEventListener('change', calc);



/**
 * Define function walkTheDom(node, func)
 * This function should traverse every node in the DOM.
 * Use recursion. On each node, calle func(node).
 */


function walkTheDOM(node, func) {
  //function of node to be implemented later
  func(node);
  //go to the first child
  node = node.firstChild;
  // loop through all the sibling nodes as long as node is true
  while (node) {
    //recursive call to walk the dom
    walkTheDOM(node, func);
    //move to the next sibling
    node = node.nextSibling;
  }
}