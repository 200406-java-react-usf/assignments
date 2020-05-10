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




