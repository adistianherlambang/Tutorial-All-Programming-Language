let mut a = vec![1, 2];
let b = vec![3, 4];

// extend (concat)
a.extend(b);               // [1, 2, 3, 4]

// slice
let sub = &a[1..3];        // [2, 3]