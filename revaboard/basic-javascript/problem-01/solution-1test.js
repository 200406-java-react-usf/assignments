// npm install prompt and npm install inquirer
//These 2 are required for prompt and questions 
const prompt = require("prompt");
const inquirer = require('inquirer');



//inpute will be Date object
let main = function () {
    // here is the format of the question in the console
    let question = {
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
    inquirer.prompt(question)
        .then(answers => {
            let input = answers.date;
            let date = new Date(input);
            let year = date.getFullYear();
            if(year%4==0 && year%100 != 0 || year%400 ==0 ){
                console.log(true);
            }else{
                console.log(false);
            }
        });
        

}
main();