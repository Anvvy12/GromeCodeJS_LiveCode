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

numbersList.forEach((el) => {});
