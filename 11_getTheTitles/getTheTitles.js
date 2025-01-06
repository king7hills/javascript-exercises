const getTheTitles = function(objArr) {
    const titleArr = [];
    objArr.forEach(element => {
        titleArr.push(element.title);
    });
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
