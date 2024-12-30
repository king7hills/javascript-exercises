const sumAll = function(a, b) {
    let i = a;
    let n = b;
    //test for order
    if (a > b) {
        i = b;
        n = a;}
    
    //test if inputs are positive numbers
    if  (a < 0 || b < 0) {
        return 'ERROR';
    //test if input is an Integer
    } else if (Number.isInteger(a) && Number.isInteger(b)) {
        let naturalSum = (n**2+n)/2;
        let reduceSum = (i**2-i)/2;
        let desiredSum = naturalSum - reduceSum;
        return desiredSum;
    } else return 'ERROR';

    
};

// Do not edit below this line
module.exports = sumAll;
