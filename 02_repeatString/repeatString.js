const repeatString = function(string, n) {
    let newString = ''
    let i = n;
    if (i < 0) {
        return newString = 'ERROR';
    } else {
    for (i; i > 0; i--) {
        newString += string;
    } return newString;}
};

// Do not edit below this line
module.exports = repeatString;
