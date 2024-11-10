const removeFromArray = (arr, ...args) =>
  arr.filter((val) => !args.includes(val));

// Do not edit below this line
module.exports = removeFromArray;
