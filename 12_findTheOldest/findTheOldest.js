const findTheOldest = function(objArr) {
    objArr.forEach(person => {
        let birth = person.yearOfBirth;
        let death = 0
        if (person.yearOfDeath == undefined) {
            death = new Date().getFullYear();
        }
        else {death = person.yearOfDeath;}

        person.age = death - birth;
    });
    objArr.sort((a, b) => {return b.age - a.age});
    return objArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
