const arr = [1, 2, 3, 4];

// forEach
arr.forEach(x => {
  console.log(x);
});

// map
const doubled = arr.map(x => x * 2); // [2, 4, 6, 8]

// filter
const even = arr.filter(x => x % 2 === 0); // [2, 4]

// reduce
const sum = arr.reduce((acc, x) => acc + x, 0); // 10

// some
const hasEven = arr.some(x => x % 2 === 0); // true

// every
const allPositive = arr.every(x => x > 0); // true

// find
const found = arr.find(x => x > 2); // 3

// findIndex
const index = arr.findIndex(x => x > 2); // 2