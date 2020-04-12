function validateEmail(email, onComplete, onError) {      

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      onComplete (true);
      return;

    }
      onError('This is not a valid email.');
      return;
  }



module.exports = {validateEmail}