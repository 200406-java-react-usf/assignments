//Create a function that checks for a valid email format

function myValidEmail(email) {
   const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   if (emailRegexp.test(email)) console.log(email);
   else console.log('You provided an invalid Email');
}
myValidEmail('email@email.edu');