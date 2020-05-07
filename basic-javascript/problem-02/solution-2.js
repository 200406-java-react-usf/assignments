function main(input){
    //regular expression of email?
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)){
            return true;
        }else{
            return false;
        };
    }
    
module.exports = main;
