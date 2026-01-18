let mut v = vec![3, 1, 4, 2];

// sort
v.sort();                  // [1, 2, 3, 4]

// sort descending
v.sort_by(|a, b| b.cmp(a)); // [4, 3, 2, 1]

// reverse
v.reverse();               // [1, 2, 3, 4]