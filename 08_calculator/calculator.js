const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
	arr.forEach(element => total += element);
  return total;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(element => total *= element);
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total *= i;    
  } return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
