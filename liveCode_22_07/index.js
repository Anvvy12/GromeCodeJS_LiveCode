const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 17,
  },
  "customer-id-3": {
    name: "Ben",
    age: 24,
  },
  "customer-id-4": {
    name: "Mark",
    age: 12,
  },
  "customer-id-8": {
    name: "Eva",
    age: 2,
  },
  "customer-id-13": {
    name: "Eva",
    age: 30,
  },
};

// const getCustomersList = (obj) => {
//   const custsKeysArr = Object.keys(obj);
//   const custsValueArr = Object.values(obj);

//   const custArray = custsValueArr.map((elem) => Object.assign({}, elem));
//   custArray.map((elem, index) => (elem.id = custsKeysArr[index]));
//   custArray.sort((a, b) => a.age - b.age);
//   return custArray;
// };

// const getCustomersList = (obj) =>
//   Object.entries(obj)
//     .map(({ id, customer }) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = (obj) =>
//   Object.entries(obj)
//     .map(([id, customer]) => {
//       // const obj = {};
//       // Object.assign(obj, { id: entry[0] });
//       // return Object.assign(obj, entry[1]);
//       return { id, ...customer };
//     })
//     .sort((a, b) => a.age - b.age);

console.log(customers);

// use push itead of concat

// const getCustomersList = (obj) => {
//   return Object.entries(obj)
//     .map((arr) => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// const getCustomersList = (customers) =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// good
// Alexandr

// const getCustomersList = (obj) =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort(
//       (customerFirst, customerSecond) => customerFirst.age - customerSecond.age
//     );

// 1. dont use values
// 2. dont use index
// 3. bad naming
// const getCustomersList = (obj) => {
//   return Object.keys(obj)
//     .map((key) => ({ ...obj[key], id: key }))
//     .sort((a, b) => a.age - b.age);
// };

// 1. dont use values
// 2. dont use index
// 3. bad naming
// 4. remove redunt variables
// const getCustomersList = (obj) => {
//   const customersId = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerId, index) => ({
//       ...customerId,
//       id: customersId[index],
//     }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// bad

// const getCustomersList = (obj) => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// bad
// 1. don`t use  shift
// 2. fix esLint errors
// 2. bad naming
// 3. remove redunt variables

// const getCustomersList = (obj) => {
//   return Object.entries(obj)
//     .map((arr) => {
//       const idObj = { id: arr[0] };
//       return { ...arr[1], idObj };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// 1 dont use index
// const getCustomersList = (customers) =>
//   Object.keys(customers)
//     .reduce((acc, elem, index) => {
//       acc.push({ id: elem, ...customers[elem] });
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// bad
const getCustomersList = (obj) => {
  // obj is the object we want to get the keys from
  const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
  const first = order.map((el) => el[1]); // get the values
  const second = order.map((el) => el[0]); // get the keys
  return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
};

console.log(customers);
console.log(getCustomersList(customers));
