const Calculate = {
    factorial(inputNum) {
        if(inputNum === 0){
            return 1;
        }    
        for(let i = inputNum - 1; i >= 1; i--){
            inputNum *= i;
        }
        return inputNum;
    }
};

module.exports = Calculate;