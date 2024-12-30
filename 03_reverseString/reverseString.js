const reverseString = function(string) {
    const stringArray = string.split('');
    let lastPosition = stringArray.length - 1;
    let reverseArray = [];
    while (lastPosition >= 0) {
        reverseArray += stringArray[lastPosition];
        lastPosition--;
    }
    return reverseArray.toString('');
};

// Do not edit below this line
module.exports = reverseString;
