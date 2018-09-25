// Make a triangle pattern of hashes using console.log
let i = 1;
while (i < 7) {
  const hash = '#';
  console.log(hash.repeat(i));
  i++;
}

// FizzBuzz
for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n); // empty string will be false so can use || operator
}

// 8 x 8 grid
// Refactor using nested for loops since I ended up needing a counter for each loop

function grid(len) {
  let row = 0;
  let rowStr = '';
  while (row < len) {
    if (row === 0 || row % 2 === 0) {
      let i = 0;
      while (i < len / 2) {
        rowStr += ' ' + '#';
        i++;
      }
      rowStr += '\n';
    } else {
      let j = 0;
      while (j < len / 2) {
        rowStr += '#' + ' ';
        j++;
      }
      rowStr += '\n';
    }
    row++;
  }
  console.log(rowStr);
}

grid(8);
