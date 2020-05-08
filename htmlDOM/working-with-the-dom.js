// Make each link direct the user to its respective website (see id)
document.getElementsByName("google")[0].setAttribute("href", "https://www.google.com");
document.getElementsByName("twitter")[0].setAttribute("href", "https://www.twitter.com");
document.getElementsByName("slack")[0].setAttribute("href", "https://www.slack.com");
document.getElementsByName("javadocs")[0].setAttribute("href", "https://www.javadocs.com");
// Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!!)
let optionArr = document.getElementById("planet").getElementsByTagName("option");
for (let i = 0; i < optionArr.length; i++) {
    if (optionArr[i].innerHTML == "Pluto") {
        optionArr[i].disabled = true;
    }
}
// Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.
for (let i = 0; i < optionArr.length; i++) {
    optionArr[i].setAttribute("value", optionArr[i].innerHTML)
}

function alienText() {
    console.log("trigger");

    this.value = document.getElementById("planet").value;

    if (document.getElementById("planet").value != "Earth") {
        document.querySelector("p[hidden]").removeAttribute("hidden");
    } else {
        document.querySelector("p[hidden]").setAttribute("hidden", true);
    }
}

document.getElementById("planet").addEventListener("change", alienText)


// When the submit button is pressed, get the values from all of the input into a new row in the table below.  
//Make sure no input is empty, check that first and last name are at least two letters each. 
//Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.


function addUser() {
    let table = document.getElementsByTagName("table")[0];

    let gender = false;
    let genderArr = document.getElementsByName("gender");
    for (i = 0; i < genderArr.length; i++) {
        if (genderArr[i].checked) {
            gender = genderArr[i].value
        }
    };

    let activity = false;
    let activityArr = document.getElementsByClassName("activity");
    for (i = 0; i < genderArr.length; i++) {
        if (activityArr[i].checked) {
            activity = activityArr[i].value
        }
    };
    if (
        document.getElementById("firstname").value.length >= 2 &&
        document.getElementById("lastname").value.length >= 2 &&
        document.getElementById("email") &&
        document.getElementById("phone") &&
        document.getElementById("bday") &&
        document.getElementById("color") &&
        gender &&
        activity) {
        console.log("trigger2");
        let newUser = [
            document.getElementById("firstname").value,
            document.getElementById("email").value,
            document.getElementById("phone").value,
            document.getElementById("bday").value,
            document.getElementById("color").value,
            gender,
            activity
        ];
        let row = table.insertRow(-1);
        for (i = 0; i < newUser.length; i++) {
            console.log("round" + i);

            let newcell = row.insertCell(i);
            row.insertCell(i).innerHTML = newUser[i];
        }
        return false

    }
}

document.getElementById("form-sub").addEventListener("click", addUser)

// Create a function openDetails() which opens the details element. 
//Invoke this function when the details’ summary is moused over. 
//The details should be hidden when the mouse is removed from the summary.

function openDetails() {
    document.querySelector("details").setAttribute("open", true);
}

function closeDetails() {
    document.querySelector("details").removeAttribute("open");
}
document.querySelector("summary").addEventListener("mouseenter", openDetails);
document.querySelector("summary").addEventListener("mouseleave", closeDetails);
// Create a function that concatenates the inner HTML of all of the span 
//elements and prints the results to the console.

let span = document.getElementsByTagName("span");
let result = "";
for (i = 0; i < span.length; i++) {
    result += span[i].innerHTML;
}
console.log(result);
// Create a function that displays the current time on earth 
//in the span with id “earth_time”. 
//Invoke this function when “Earth time” button is clicked. 
function showtime() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("earth_time").innerHTML = time;
}
document.getElementById("earth_time_check").addEventListener("click", showtime)
    // Three seconds after a user clicks on the “Intergalactic Directory” heading, 
    //the background color should change to a random color.
    // Make sure this color is never black so we can still read our black text!
    // (there are other dark colors it could change to where we also couldn’t 
    //see the text but it’s enough to just accomodate for a black background)
function RandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function changeColor() {
    document.body.style.backgroundColor = `rgb( ${[RandomInt(254), RandomInt(254), RandomInt(254)]})`;
}
document.getElementsByTagName("span")[0].addEventListener("click", changeColor)


// When inputs with id n1 and n2 have valid numerical input, 
//perform the operation specified in the select. Display the result in the element with id result.
for (let i = 0; i < optionArr.length; i++) {
    optionArr[i].setAttribute("operation", optionArr[i].innerHTML)
}

function calc() {

    let result;
    document.getElementById("n1").setAttribute("type", "number");
    document.getElementById("n2").setAttribute("type", "number");

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    switch (document.getElementById("operation").value) {
        case "Add":
            result = n1 + n2;
            console.log(result);
            break;
        case "Subtract":
            result = n1 - n2;
            console.log(result);

            break;
        case "Divide":
            result = n1 / n2;
            console.log(result);

            break;
        case "Multiply":
            result = n1 * n2;
            console.log(result);

            break;
    }
    document.getElementById("result").innerHTML = result;


}


document.getElementById("n1").addEventListener("input", calc);
document.getElementById("n2").addEventListener("input", calc);

// Define function walkTheDom(node, func)
// 	This function should traverse every node in the DOM. 
// 	Use recursion. On each node, calle func(node).