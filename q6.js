//? 6. write a reduce method to get the sum of all array items
const arr = [31, 1, 7, 12, 27];

//! Answer:
const sum = arr.reduce((i, j) => {
  return i + j;
}, 0);

console.log(sum);