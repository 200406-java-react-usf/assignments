function main(input){
    //regular expression of email?
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)){
            return true;
        }else{
            return false;
        };
    }
    
console.log(main("hao@gmail.com"))
