let arr = [3, 1, 4, 2];

// sort (ascending)
arr.sort((a, b) => a - b); // [1, 2, 3, 4]

// reverse
arr.reverse();             // [4, 3, 2, 1]

// concat
const merged = arr.concat([5, 6]); // [4, 3, 2, 1, 5, 6]

// join
const str = arr.join("-"); // "4-3-2-1"