// Min function
function min(x, y) {
  return x > y ? y : x;
}

// Recursion
function isEven(num) {
  let numAbs = Math.abs(num);
  if (numAbs === 0) {
    return true;
  } else if (numAbs === 1) {
    return false;
  } else {
    return isEven(numAbs - 2);
  }
}

// Bean counting

function countBs(str) {
  const ray = str.split('');
  console.log(ray);
  let lettercount = 0;
  ray.forEach(element => {
    element === 'B' ? lettercount++ : null;
  });
  return lettercount;
}

console.log(countBs('ArrowB'));

function countChars(str, ltr) {
  const ray = str.split('');
  console.log(ray);
  let lettercount = 0;
  ray.forEach(element => {
    element === ltr ? lettercount++ : null;
  });
  return lettercount;
}

console.log(countChars('ArrowB', 'o'));
