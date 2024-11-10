const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" || typeof num2 !== "number" || num1 % 1 !== 0 ||
    num2 % 1 !== 0 || !num1 || !num2 ||
    num1 < 0 || num2 < 0
  ) return "ERROR";
  biggerNumber = num1 > num2 ? num1 : num2;
  smallerNumber = num1 > num2 ? num2 : num1;

  let result = 0;
  for (let i = smallerNumber; i <= biggerNumber; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
