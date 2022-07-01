function getSenseOfLife() {
  return 42;
}
console.log(getSenseOfLife());

// Test data

const res = getSenseOfLife();
console.log(res);

function getSquared(num) {
  return num * num;
}

//test data
let num = 2;
const res2 = getSquared(num);
console.log(res2);
console.log(getSquared(num));

// function sum(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }
// // tesst data
// console.log(sum(2, 4));
// console.log(sum("2", 4));
// console.log(sum("-2", 4));
// console.log(sum(2, ""));

function printMessage(age) {
  return `I am ${age} years old`;
}

//test data
console.log(printMessage(12));
console.log(printMessage("12"));
console.log(printMessage(""));

const mult = (numberOne, numberTwo) => numberOne * numberTwo;

//test data
console.log(mult(14, 15));
console.log(mult(0, 1));
console.log(mult(12, 12));

const square = (number) => number * number;

// test data
console.log(square(1));
console.log(square(40));
console.log(square(-2));
console.log(square(0));

const getMagicNumber = () => 17;

//test data
console.log(getMagicNumber());
console.log(getMagicNumber(144444));
console.log(getMagicNumber("12"));

function sumFunc(from, to) {
  let res = 0;

  for (let index = from; index <= to; index++) {
    res += index;
  }

  return res;
}

function compereSum(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

//test data
console.log(compereSum(1, 3, 2, 5));
