const sumAll = function(initial, final) {

    if (initial < 0 || final < 0){

        return "ERROR";
    }

    if (!Number.isInteger(initial) || !Number.isInteger(final)) {
        
        return "ERROR";

    }
    
    if (initial > final){

        let temp = initial;
        initial = final;
        final = temp;
    }
    
    let sum = 0;
    for (let i = initial; i <= final; i++) {
      sum += i;
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
