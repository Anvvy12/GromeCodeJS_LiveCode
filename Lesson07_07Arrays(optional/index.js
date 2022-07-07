// input: arr, callback
// output: new arr

// input callback
// output boolean

// algo
// 1. create new arr
// 2. iterate input arr
// 3. apply callbac for every elem
// 4. if tue => push

const filterArrayElements = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      resArr.push(arr[index]);
    }
  }

  return resArr;
};

// test data

console.log(filterArrayElements([1, 2, -1, 4, 5, 6], (el) => el > 2));
console.log(
  filterArrayElements(["aaaaaaaa", "b", "cccccc"], (el) => el.length > 2)
);
console.log(filterArrayElements([true, false, false, true, false], (el) => el));

const testArr = [1, 20, 2, 11, 0, -5, 50, 5, 4, 8, NaN];
const testCallback = (el, index, arr) => {
  if (el > 10) {
    return true;
  }
  return false;
};

console.log(filterArrayElements(testArr, testCallback));
