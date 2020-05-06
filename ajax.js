/*
    Asynchrnous Javascript and XML

    Works with more than just XML

    AJAX != programming language
    AJAX != framework
    AJAX == WEb API provided by the browser's JS environment

    AJAX is used as a technique for accessing web servers from a web page using JS.


*/

window.onload = function() {
    // Add and EL to id field and select fiels for validating inpuut
    ID_FIELD.addEventListener('blur', fieldsValid);
    SELECT_FIELD.addEventListener('blur', fieldsValid);


    // Add an EL to the submit button to send an AJAX request to the SWAPI

    SUBMIT_BTN.addEventListener('click', fetchInfo);

    //Disable the submit button by default
    SUBMIT_BTN.setAttribute('disabled', true);
    //Hide the alert message by default
    ALERT_MSG.style.display = 'none';

}

function fieldsValid() {
    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;

    if(id && category){
        ALERT_MSG.style.display = 'none';
        SUBMIT_BTN.removeAttribute('disabled');
    }
    else {
        ALERT_MSG.style.display = 'block';
        SUBMIT_BTN.setAttribute('disabled', true);
    }
}

function getInfo() {
    //Get the values of the id and category
    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;
    //Make our AJAX request to retrieve the data

    /*
       AJAX Workflow
       
       Making asynchronous calls to an external web server using AJAX:

            1) Create an XMLHttpRequest object (XHR)
            2) Open the request by defining the HTTP method/verb and the target server URL
            3) Send the request (which may optionally contain data in the request body)
            4) Define a callback function which will handle the response when received
    */ 

    // Step 1
    let xhr = new XMLHttpRequest();

    //Step 2
    xhr.open('GET', `https://swapi.dev/api/${category}/${id}`);

    //Step 3
    //xhr.send(JSON.stringify());
    xhr.send();

    //Step 4
    xhr.onreadystatechange = () => {
        /*
            The XMLHttpRequest.readyState property returns the state an XHR client is currently in. An XHR client exits in one of the following states:
                
                0 - UNSENT; the XHR object has been created, but .open() has no been called
                1 - OPENED; .open() has been called
                2 - HEADERS_RECEIVED; sned() has been called AND the response header and status code are available
                3 - LOADING; begginig to receive the response body, xhr.responseText() holds partial data
                4 - DONE; the operation is complete, and the response is fully received

        */

        if(xhr.readyState === 4 && xhr.status === 200) {
            RESULTS_CONTAINER.innerText = xhr.responseText;
        }
    }
}

async function fetchInfo() {
    
    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;

    let response = await fetch( `https://swapi.dev/api/${category}/${id}`);
    let data = await response.text()
    RESULTS_CONTAINER.innerText = data;
}

const ID_FIELD = document.getElementById('sw-id');
const SELECT_FIELD = document.getElementById('sw-category');
const SUBMIT_BTN = document.getElementById('submit-btn');
const SW_FORM = document.getElementById('sw-form');
const RESULTS_CONTAINER = document.getElementById('results-container');
const ALERT_MSG = document.getElementById('alert-msg');