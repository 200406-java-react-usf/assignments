/*
Working with the DOM

In this assignment you will be getting practice interacting and working with the Document Object Model (DOM). 
Your task will be to complete the following tasks in a separate JS file titled working-with-the-dom.js . 
Use the provided HTML file found in this Drive folder. Note: you will not need to change anything about the 
HTML file in order to complete the tasks below. Push your completed assignment up to your branch by May 11, 2020.

    1. Make each link direct the user to its respective website (see id)
    2. Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)
    3. Define a function alienText() which shows the hidden element 
       displaying an alien message. When any planet other than Earth 
       is selected, execute this function.
    4. When the submit button is pressed, get the values from all of the
       input into a new row in the table below.  Make sure no input is 
       empty, check that first and last name are at least two letters 
       each. Validate for valid phone number and email structure. This 
       should continue to work for multiple entries and rows.
    5. Create a function openDetails() which opens the details element. 
       Invoke this function when the details’ summary is moused over. 
       The details should be hidden when the mouse is removed from the summary.
    6. Create a function that concatenates the inner HTML of all of the
       span elements and prints the results to the console.
    7. Create a function that displays the current time on earth in the span 
       with id “earth_time”. Invoke this function when “Earth time” button is clicked. 
    8. Three seconds after a user clicks on the “Intergalactic Directory” 
       heading, the background color should change to a random color. Make 
       sure this color is never black so we can still read our black text! 
       (there are other dark colors it could change to where we also couldn’t 
       see the text but it’s enough to just accomodate for a black background)
    9. When inputs with id n1 and n2 have valid numerical input, perform 
       the operation specified in the select. Display the result in the 
       element with id result.
    10. Define function walkTheDom(node, func)
	    This function should traverse every node in the DOM. 
	    Use recursion. On each node, calle func(node).
*/


/**
 * QUESTION 1
 *   Make each link direct the user to its respective website (see id)
 * @param {*} elementName 
 * @param {*} URL 
 * @param {*} innerText 
 */
function changeLink(elementName, URL, innerText) {
    var link = document.getElementsByName(elementName)[0];
    window.open(
      link.href,
      '_blank'
    );

    link.innerHTML = innerText;
    link.setAttribute('href', URL);

    return false;
}
changeLink("google", "https://www.google.com/", "Google");
changeLink("twitter", "https://twitter.com/home", "Twitter");
changeLink("slack", "https://slack.com/", "Slack");
changeLink("javadocs", "https://javadocs.com/", "Javadocs");

/**
 * QUESTION 2
 *   Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)
 */

let planets = document.getElementById("planet").getElementsByTagName('option');
planets[3].remove()

/**
 *  QUESTION 3
 *    Define a function alienText() which shows the hidden element 
 *    displaying an alien message. When any planet other than Earth 
 *    is selected, execute this function.
 */

function alienText() {
    let hiddenMessage = document.getElementsByTagName("p")[5]
    let planets = document.getElementById("planet");
    let selectedValue = planets.options[planets.selectedIndex].value;
    if (selectedValue == "Mars" || selectedValue == "Proxima Centauri b") {
        hiddenMessage.hidden = false;
    } else {
        hiddenMessage.hidden = true;
    }
}

document.getElementById("planet").addEventListener("click", alienText);

/**
 *  QUESTION 4
 *    When the submit button is pressed, get the values from all of the
 *    input into a new row in the table below.  Make sure no input is 
 *    empty, check that first and last name are at least two letters 
 *    each. Validate for valid phone number and email structure. This 
 *    should continue to work for multiple entries and rows.
 */

function addNewUser() {
   let table = document.getElementsByTagName("table")[0];
   let firstName = document.getElementById("firstname").value;
   let lastName = document.getElementById("lastname").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   let birthday = document.getElementById("bday").value;
   let favColor = document.getElementById("color").value;
   let gender = document.getElementsByName("gender");
   if (gender[0].checked) {
      gender = "male";
   } else if (gender[1].checked) {
      gender = "female";
   } else if (gender[2].checked) {
      gender = "other";
   }
   let activities = document.getElementsByTagName("input");
   let checkedActivities = []
   if (activities[9].checked) {
      checkedActivities.push("hiking");
      //console.log(checkedActivities);
   }
   if (activities[10].checked) {
      checkedActivities.push("stamp collecting");
   }
   if (activities[11].checked) {
      checkedActivities.push("birding");
   }
   if (activities[12].checked) {
      checkedActivities.push("underwater basket weaving");
   }
   console.log(checkedActivities);
   if (firstName && email && phone && birthday && favColor && gender && activities) {

      let row = document.createElement('tr');
      let firstNameCell = document.createElement('td');
      let emailCell = document.createElement('td');
      let phoneCell = document.createElement('td');
      let birthdayCell = document.createElement('td');
      let colorCell = document.createElement('td');
      let genderCell = document.createElement('td');
      let activitiesCell = document.createElement('td');

      row.appendChild(firstNameCell);
      row.appendChild(emailCell);
      row.appendChild(phoneCell);
      row.appendChild(birthdayCell);
      row.appendChild(colorCell);
      row.appendChild(genderCell);
      row.appendChild(activitiesCell);

      table.appendChild(row);


      activitiesList = document.createElement('ul');
      
      checkedActivities.forEach(function (activity) {
         let li = document.createElement('li');
         activitiesList.appendChild(li);
      
         li.innerHTML += activity;
      });
      firstNameCell.innerText = firstName;
      emailCell.innerText = email;
      phoneCell.innerText = phone;
      birthdayCell.innerText = birthday;
      colorCell.innerText = favColor;
      genderCell.innerText = gender;
      activitiesCell.innerHTML = ""
      activitiesCell.innerHTML = activitiesList.innerHTML;

      //document.getElementById("color").value = '';
      //document.getElementById("gender").value = '';
      //document.getElementById("activities").value = '';
   }
   document.getElementById("firstname").value = '';
   document.getElementById("lastname").value = '';
   document.getElementById("email").value = '';
   document.getElementById("phone").value = '';
   document.getElementById("bday").value = '';
}

document.getElementById("form-sub").addEventListener("click", addNewUser);

/**
 *  QUESTION 5 
 *     Create a function openDetails() which opens the details element. 
 *     Invoke this function when the details’ summary is moused over. 
 *     The details should be hidden when the mouse is removed from the summary.
 */

function openDetails() {
   document.getElementsByTagName("details")[0].open = true;
}
function closeDetails() {
   document.getElementsByTagName("details")[0].open = false;
}

document.getElementsByTagName("details")[0].addEventListener("mouseover", openDetails);
document.getElementsByTagName("details")[0].addEventListener("mouseout", closeDetails);

/**
 * QUESTION 6
 *    Create a function that concatenates the inner HTML of all of the
 *    span elements and prints the results to the console.
 */

function concatAllSpan() {
   let spans = Array.prototype.slice.call(document.getElementsByTagName("span"));
   let concatSpans = [];
   //console.log(spans)
   spans.forEach(function (span) {
      concatSpans.push(span.innerHTML + " ");
   })
   console.log(concatSpans);
}
concatAllSpan();

/**
 * QUESION 7
 *     Create a function that displays the current time on earth in the span 
 *     with id “earth_time”. Invoke this function when “Earth time” button is clicked. 
 */

function currentEarthTime() {
   let currentdate = new Date();
   let time = currentdate.getDate() + "/"
   + (currentdate.getMonth()+1)  + "/" 
   + currentdate.getFullYear() + " @ "  
   + currentdate.getHours() + ":"  
   + currentdate.getMinutes() + ":" 
   + currentdate.getSeconds() + " "
   //console.log(utcTime)
   document.getElementById("earth_time").innerText = time;
}

document.getElementById("earth_time_check").addEventListener("click", currentEarthTime);

/**
 * QUESTION 8
 *     Three seconds after a user clicks on the “Intergalactic Directory” 
 *     heading, the background color should change to a random color. Make 
 *     sure this color is never black so we can still read our black text! 
 *     (there are other dark colors it could change to where we also couldn’t 
 *     see the text but it’s enough to just accomodate for a black background)
 */

function changeToRandomColor() {
   setTimeout(() => {
      let x = Math.floor(Math.random() * 200)+56;
      let y = Math.floor(Math.random() * 200)+56;
      let z = Math.floor(Math.random() * 200)+56;
      let bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);
   
      document.body.style.background = bgColor;
   }, 3000);

}

document.getElementsByTagName('div')[0].childNodes[1].addEventListener("click", changeToRandomColor);

/**
 * QUESTION 9
 *    When inputs with id n1 and n2 have valid numerical input, perform 
 *    the operation specified in the select. Display the result in the 
 *    element with id result.
 */

function calculator() {
   let n1 = document.getElementById("n1").value;
   let n2 = document.getElementById("n2").value;
   let n3;
   let operation = document.getElementById("operation").value;
   console.log(operation);
   if (operation == "Add") {
      n3 = n1 + n2;
   } else if (operation == "Subtract") {
      n3 = n1 - n2;
   } else if (operation == "Multiply") {
      n3 = n1 * n2;
   } else if (operation == "Divide") {
      n3 = n1/n3;
   }
   console.log(n1 + " " + n2 + " " + n3);
   let result = document.getElementById("result");
   result.innerText = n3;
}

document.getElementById("operation").addEventListener("mouseout", calculator);

/**
 * QUESTION 10. 
 *     Define function walkTheDom(node, func)
 *     This function should traverse every node in the DOM. 
 *     Use recursion. On each node, calle func(node).
 */

function walkTheDom(node, func) {
   let dom = document.getElementsByTagName("body");
   for (let element of dom.children) {
      func(node);
    }
   console.log(dom);
}
