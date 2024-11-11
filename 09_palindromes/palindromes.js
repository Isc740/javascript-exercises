const removeNonAlphanumeric = (string) => string.replace(/\W/g, '');

const palindromes = function (word) {
  filteredWord = removeNonAlphanumeric(word).toLowerCase();
  let left = filteredWord.length - 1;
  for (let i = 0; i < filteredWord.length / 2; i++) {
    if (filteredWord[left] !== filteredWord[i]) {
      return false;
    }
    left--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
