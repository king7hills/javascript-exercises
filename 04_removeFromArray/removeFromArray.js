const removeFromArray = function(array, ...itemsToRemove) {
    let filteredArray = array.filter((item) => !itemsToRemove.includes(item));
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
