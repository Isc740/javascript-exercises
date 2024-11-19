const fibonacci = function (position) {
  position = parseInt(position);

  if (position === 0) return 0;
  if (position < 1) return "OOPS";

  let prevNum = 1;
  let temp = 1;
  let currentNum = 1;

  for (let i = 2; i <= position; i++) {
    if (i == position) {
      return currentNum;
    }

    temp = currentNum;
    currentNum = prevNum + currentNum;
    prevNum = temp;
  }
  return currentNum;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
