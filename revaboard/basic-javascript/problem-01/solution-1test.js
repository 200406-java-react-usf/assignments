// npm install prompt and npm install inquirer
//These 2 are required for prompt and questions 
var prompt = require("prompt");
var inquirer = require('inquirer');


// here is the format of the question in the console
var question = {
    type: "input",
    name: "date",
    message: "date?",
// this check if there is any input
    validate: function (value) {
        if (value != null) {
            return true;
        }
    }
}
//inpute will be Date object
var main = function () {
    inquirer.prompt(question)
        .then(answers => {
            var input = answers.date;
            var date = new Date(input);
            var year = date.getFullYear();
            if(year%4==0 && year%100 != 0 || year%400 ==0 ){
                console.log(true);
            }else{
                console.log(false);
            }
        });
        

}
main();