let nested = vec![vec![1, 2], vec![3, 4]];

// flatten
let flat: Vec<i32> = nested.into_iter().flatten().collect();
// [1, 2, 3, 4]