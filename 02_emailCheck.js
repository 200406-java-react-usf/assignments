//input will be email
function main(input){
        //common expression?
        var output = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
        console.log(output);
        return output;
};
main();