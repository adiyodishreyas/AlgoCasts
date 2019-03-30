// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const rev = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(rev);
}

module.exports = reverseInt;


// function reverseInt(n) {
//     let rI = n === 0 ? 0 : '';
//     let isNegative = n < 0;
//     n = Math.abs(n);
//     while(n > 0) {
//         let lastDigit = n % 10;
//         rI += lastDigit;
//         n = parseInt(n/10);
//     }
//     return  isNegative ? 0 - parseInt(rI) : parseInt(rI);
// }