const numbersList1 = [1, 2, 3, 4, 5];
const numbersList2 = [1, 2, 3, 4, 5];
const numbersList3 = [1, 2, 3, 4, 5];
const numbersList4 = [1, 2, 3, 4, 5];
const numbersList5 = [1, 2, 3, 4, 5];

console.log("before Pop", numbersList1);
const res1 = numbersList1.pop();
console.log(res1);
console.log("aftr Pop", numbersList1);
console.log("----------------------");

// input: element
// output:

console.log("before push", numbersList2);
const res2 = numbersList2.push();
console.log("aftr oush", numbersList2);

// input: -
// output: first elem of array

console.log("before shift", numbersList3);
const res3 = numbersList3.shift();
console.log("aftr shift", numbersList3);

// input: callback
// output: new array

// option_1
const fulterRes = numbersList4.filter(function filterCallback(element) {
  return element > 5;
});

// option_2
numbersList4.filter((element) => element > 0);

// callback

function sum(from, to, resolver) {
  let sumResult = 0;
  for (let i = from; i < to; i += 1) {
    sumResult += i;
  }
  resolver(sumResult);
}

function resolver(ResSum) {
  console.log(ResSum);
}

// test data
sum(2, 14, resolver);
