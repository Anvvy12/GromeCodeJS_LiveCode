const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);

// input: callback
// output: new array

// callback
// input: elem ,index (optional), array (optional)
// output: elem

// option 1
// const mapResult = numbersList.map((el, index) => (index > 2 ? el * el : el));

// const mapRes = numbersList.map((el) => el * el);
// console.log(mapResult);
// console.log(mapRes);

const mapResult = numbersList.map((el, index) => {
  let newEl = null;

  if (index > 2) {
    newEl = el * el;
  } else {
    newEl = el;
  }

  return newEl;
});

// input callback
// output undefined

// task 3
const res = numbersList.forEach((el) => {
  if (el > 0) {
    console.log(el);
  }
});
console.log(res);
const forEachArray = numbersList.forEach((el) => el * el);

// task 4 reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

const reduceArray = transactions.reduce((sum, el) => {
  if (el > 100) {
    return sum + el;
  }
  return sum;
}, 0);

console.log(reduceArray);

// option 2

const reduceArray2 = transactions.reduce(
  (sum, el) => (el > 100 ? sum + el : el),
  0
);
