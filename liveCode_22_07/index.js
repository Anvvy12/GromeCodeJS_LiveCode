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
};

const getCustomersList = (obj) => {
  const keysArr = Object.keys(obj);
  const resArr = Object.values(obj);

  resArr.map((elem, index) => Object.assign(elem, { id: keysArr[index] }));
  resArr.sort((a, b) => a.age - b.age);
  console.log(obj);
  return resArr;
};

const res = getCustomersList(customers);
console.log(res);
console.log(customers);
