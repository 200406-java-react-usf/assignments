/**
 * JavaScript Assignment #5
 * By: Mohamed Aboulela
 * Purpose: Write a function that takes in a string and a number as parameters and implements a Caesar Shift encryption.
 */

function CeaserSlide (string, num) {
    return string.toUpperCase().replace(/[^A-Z]/g,'').replace(/./g, function(a) {
        return String.fromCharCode(65+(a.charCodeAt(0)-65+num)%26);
      });
    }


   // var string = 'veni, vidi, vici';
   var string = 'ABCDEFGHIJK';
  console.log(CeaserSlide(string,10));

  module.exports = 
    CeaserSlide;