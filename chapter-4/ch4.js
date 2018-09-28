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
  console.log(arr.shift());
}
reverseArray([1, 3, 5]);
