/* 	200406-Java-React-USF

	Working with the DOM Assignment

	Korey Keipe
*/

// #1) Make each link direct the user to its respective website (see id)

document.getElementsByName('google')[0].setAttribute('href', 'https://www.google.com/');
document.getElementsByName('google')[0].innerText = 'Google';

document.getElementsByName('twitter')[0].setAttribute('href', 'https://www.twitter.com/');
document.getElementsByName('twitter')[0].innerText = 'Twitter';

document.getElementsByName('slack')[0].setAttribute('href', 'https://slack.com/')
document.getElementsByName('slack')[0].innerText = 'Slack';

document.getElementsByName('javadocs')[0].setAttribute('href', 'https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html')
document.getElementsByName('javadocs')[0].innerText = 'JavaDocs';

// #2) Disable the Pluto Planet of Residency option. (Pluto isn’t a planet!! Dwarf Planets are planets too)

document.getElementById('planet').options[3].disabled = true;
document.getElementById('planet').options[3].setAttribute('hidden', true)

// #3) Define a function alienText() which shows the hidden element displaying an alien message. When any planet other than Earth is selected, execute this function.

// #4) When the submit button is pressed, get the values from all of the input into a new row in the table below.  Make sure no input is empty, check that first and last name are at least two letters each. Validate for valid phone number and email structure. This should continue to work for multiple entries and rows.

// #5) Create a function openDetails() which opens the details element. Invoke this function when the details’ summary is moused over. The details should be hidden when the mouse is removed from the summary.

// #6) Create a function that concatenates the inner HTML of all of the span elements and prints the results to the console.

// #7) Create a function that displays the current time on earth in the span with id “earth_time”. Invoke this function when “Earth time” button is clicked. 

// #8) Three seconds after a user clicks on the “Intergalactic Directory” heading, the background color should change to a random color. Make sure this color is never black so we can still read our black text! (there are other dark colors it could change to where we also couldn’t see the text but it’s enough to just accomodate for a black background)

// #9) When inputs with id n1 and n2 have valid numerical input, perform the operation specified in the select. Display the result in the element with id result.

// #10) Define function walkTheDom(node, func)
// 	This function should traverse every node in the DO
//	Use recursion. On each node, calle func(node).
