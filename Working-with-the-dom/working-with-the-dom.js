
// 1---------------------------------------------------------
let googleLink = document.querySelector("div>a[name='google']");
googleLink.setAttribute('href', 'https://www.google.com');

let twitterLink = document.querySelector("div>a[name='twitter']");
twitterLink.setAttribute('href', 'https://www.twitter.com');

let slackLink = document.querySelector("div>a[name='slack']");
slackLink.setAttribute('href', 'https://www.slack.com');

let javadocsLink = document.querySelector("div>a[name='javadocs']");
javadocsLink.setAttribute('href', 'https://www.javadocs.com');

//2---------------------------------------------------------

let disablePluto = document.querySelector("#planet>option:nth-child(4)");
disablePluto.setAttribute('disabled', 'true');

//3---------------------------------------------------
let planetId = document.querySelector("#planet");
planetId.addEventListener("change", alienText);

function alienText() {
    if((planetId.value == 'Mars') || (planetId.value == 'Proxima Centauri b')){
        document.querySelector("div.container>p").removeAttribute("hidden");
    }else{
        document.querySelector("div.container>p").setAttribute("hidden", 'true');

    }        
}

//4 ----------------------------------------------
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let bday = document.getElementById('bday');
let genradio = document.getElementsByName('gender');
// let activity = document.getElementsByClassName('activity');

//set attribue to required to all fields
firstname.setAttribute("required", "true");
firstname.setAttribute("minlength", "2");
lastname.setAttribute("required", "true");
lastname.setAttribute("minlength", "2");
email.setAttribute("required", "true");
bday.setAttribute("required", "true");
genradio[0].setAttribute("required", "true");

//set button to link with form-group
let formbtn = document.getElementById('form-sub');
let formgroup = document.querySelector("div.container>form.form-group");
formgroup.setAttribute("id", "form-group");
formbtn.setAttribute("form", "form-group");
formbtn.setAttribute("type", "submit");

//5-------------------------------------------------------------
let detail = document.querySelector("details");
detail.addEventListener("mouseover", openDetails);
detail.addEventListener("mouseout", closeDetails);

function openDetails(){
    document.querySelector("details").setAttribute("open", "true");
}
function closeDetails(){
    document.querySelector("details").removeAttribute("open");
}

//6---------------------------------------------------
let span = document.getElementsByTagName('span');

for(var i = 0; i<span.length; i++){
    console.log(span[i]);
}

//7----------------------------------------------------
let earthbtn = document.getElementById("earth_time_check");

earthbtn.addEventListener("click", () => {
    document.getElementById("earth_time").innerHTML = new Date();
})

//8------------------------------------------------------
let intergalactic = document.querySelector("div.container>h1");


intergalactic.addEventListener("click", () => {

    let bgColor;

    do{
        bgColor = randomColor();
    } while(bgColor == "rgb(0,0,0)");


    document.body.style.backgroundColor = bgColor;
})

function randomColor(){
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
return bgColor;
}
//9-------------------------------------------------------------------
let operation = document.getElementById("operation");
let result = document.getElementById("result");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");

let x, y;
n1.addEventListener("blur", () => {
    x = n1.value;
})

n2.addEventListener("blur", () => {
    y = n2.value;
})

operation.addEventListener("change", () =>{
    if(operation.value == 'Subtract'){
        result.innerHTML = (+x - +y);
    }
    if(operation.value == 'Add'){
        result.innerHTML = (+x + +y);
    }
    if(operation.value == 'Multiply'){
        result.innerHTML = (+x * +y);
    }
    if(operation.value == 'Divide'){
        result.innerHTML = (+x / +y);
    }
})
//10---------------------------------------------------------------
let rootNode = document.body;
let curNode = rootNode.firstChild;

walkTheDom(rootNode);

function walkTheDom(node){
    console.log(node);

    if((node.firstChild != null)){
        walkTheDom(node.firstChild);
    }
    if(node.nextSibling != null)
        walkTheDom(node.nextSibling)
}