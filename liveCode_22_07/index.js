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
  const entriesCust = Object.values(customers);

  const res1 = entriesCust.map((elem) => Object.assign({}, elem));
  res1.map((elem, index) => Object.assign((elem.id = keysArr[index])));
  res1.sort((a, b) => a.age - b.age);
  return res1;
};

console.log(getCustomersList(customers));
console.log(customers);
