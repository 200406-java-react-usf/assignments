function validateEmail(email, onComplete, onError) {      

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      onComplete (true);
    }
    else{
      onError('This is not a valid email.')
      };

  }

//validateEmail('kane@gmail.com', val => console.log(val), ()=>{})

module.exports = {validateEmail}