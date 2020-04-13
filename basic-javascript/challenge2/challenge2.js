//Create a function that checks for a valid email format

 function myValidEmail(email) {
   const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   if (emailRegexp.test(email)) return true;
   else  throw('You provided an invalid Email');
}
module.exports = {
   myValidEmail
}
//console.log(myValidEmail('bigmama@mlawrence.com'));