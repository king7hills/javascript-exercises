const palindromes = function (str) {
   const splitStr = str.split('');
   const letStr = splitStr.filter((char) => /[a-zA-Z0-9]/.test(char))
        .map((char) => char.toUpperCase());
   let revStr = letStr.slice();
   revStr = revStr.reverse();
   if (letStr.join('') == revStr.join('')) {
    return true;
   } else return false;
};

// Do not edit below this line
module.exports = palindromes;
