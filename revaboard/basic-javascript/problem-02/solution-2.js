function main(){
    inquirer.prompt(question)

    .then(answers => {
        var output = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.input);
        console.log(output);
        return output;
    });

}
