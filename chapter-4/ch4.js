// Sum of Range
function range(min, max) {
  const rangeArray = [];

  for (let i = min; i <= max; i++) {
    rangeArray.push(i);
  }
  console.log('array: ', rangeArray);
  return rangeArray;
}

function sum(arr) {
  console.log('ARRAY IN SUM(): ', arr);
  return arr.reduce((a, b) => a + b);
}

console.log(sum(range(1, 5)));

// Reversing an Array = without .reverse().
function reverseArray(arr) {
  let arrCopy = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrCopy.push(arr[i]);
  }
  console.log(arrCopy);
}
reverseArray([1, 3, 5]);

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let org = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = org;
  }
  return array;
}

reverseArrayInPlace([11, 2, 30]);

// Array to List
function arrayToList(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    result = { value: arr[i], rest: result };
  }
  return result;
}
