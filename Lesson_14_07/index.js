// algo
// 1. ceate object
// 2. iterate KeysList
// 3. put key/value to the Obj

// const keys = ["name", "address", "age"];
// const values = ["Bob", "Ukraine", 34];

// function buildObject(keysList, valuesList) {
//   let obj = {};
//   for (let i = 0; i < keysList.length; i += 1) {
//     obj[keysList[i]] = valuesList[i];
//     obj = { ...obj, [keysList[i]]: valuesList[i] };
//   }

//   return obj;
// }

// console.log(buildObject(keys, values));

// V2
// final solution
// function buildObject(keysList, valuesList) {
//   return keysList.reduce(
//     (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
//     {}
//   );
// }

// console.log(buildObject(keys, values));\
//----------------------------------------------------
// Task _ 2
// input obj, obj
// output boolean

// algo
// 1. get keys1, keys2
// 2. if keys1.length !==, keys2.length => false
// 3. iterate keys1
// 4. compare keys1, keys2 & value1, value2
// 5. if (step 4 === false) => false
function compareObjects(obj1, obj2) {
  // put your code here
}

// examples
const obj1 = {
  name: "Tom",
  age: 17,
};
console.log(obj1.length);

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};
