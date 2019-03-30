// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charCountMap = {};
    // const arr = str.split('');
    var maxChar = '';
    var maxCount = 0;
    for(let char of str) {
        charCountMap[char] = charCountMap[char] + 1 || 1;
        if( charCountMap[char] > maxCount ) {
            maxChar = char;
            maxCount = charCountMap[char];
        }
    }
    return maxChar;
}

module.exports = maxChar;
