const Calculate = {
    factorial(num) { 
        for(let i = num - 1; i >= 1; i--){
            num *= i;
        }
        return num;

        if(num === 0){
            return 1;
        }   
    }
};

//console.log(Calculate.factorial(5));

module.exports = Calculate;