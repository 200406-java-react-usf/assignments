/*sets the destination of the links at the top of the page*/ 
    document.getElementsByName('google')[0].href ="https://www.google.com/"
    document.getElementsByName('twitter')[0].href ="https://www.twitter.com/"
    document.getElementsByName('slack')[0].href ="https://www.slack.com/"
    document.getElementsByName('javadocs')[0].href ="https://www.javadocs.com/"

/*Disabling Pluto planet of residency option*/
document.getElementById('planet').options[3].disabled = true

/*revealing hidden message */
function alienText(){

    let p = document.getElementById('planet')
    if(p.options[p.selectedIndex].value>0){
        document.getElementsByClassName('container').style.visibility = 'visible'
    }
}

alienText()

let p = document.querySelector('.container p')
p.style.visibility = 'visible'