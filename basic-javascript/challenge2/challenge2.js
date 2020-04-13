//Create a function that checks for a valid email format

 function myValidEmail(email) {
   const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   if (emailRegexp.test(email)) return email;
   else  return ('You provided an invalid Email');
}
module.exports = {
   myValidEmail
}
//console.log(myValidEmail('bigmama@mlawrence.com'));