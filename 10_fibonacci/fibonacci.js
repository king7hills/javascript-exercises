const fibonacci = function(place) {
    const sequence = [1, 1];
    let numPlace = Number(place);
    
    if (numPlace < 0) {
        return "OOPS";
    }
    if (numPlace == 0) {
        return 0;
    }
    if (numPlace == 1 || numPlace == 2) {
        return 1;
    };
    for (let i = 2; i < numPlace; i++) {
        sequence.push(sequence[i - 1]+sequence[i - 2]);
    };
    return sequence[numPlace - 1];
};

// Do not edit below this line
module.exports = fibonacci;
