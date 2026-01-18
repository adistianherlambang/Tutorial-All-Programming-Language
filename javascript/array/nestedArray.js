const nested = [1, [2, [3, 4]]];

// flat
nested.flat(2);          // [1, 2, 3, 4]

// flatMap
[1, 2, 3].flatMap(x => [x, x * 2]);
// [1, 2, 2, 4, 3, 6]