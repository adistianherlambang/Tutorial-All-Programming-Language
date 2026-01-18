let v = vec![1, 2, 3, 4];

// for_each
v.iter().for_each(|x| {
    println!("{}", x);
});

// map
let doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();

// filter
let even: Vec<i32> = v.iter().filter(|x| *x % 2 == 0).cloned().collect();

// reduce (fold)
let sum: i32 = v.iter().fold(0, |acc, x| acc + x);

// any (some)
let has_even = v.iter().any(|x| x % 2 == 0);

// all (every)
let all_positive = v.iter().all(|x| *x > 0);

// find
let found = v.iter().find(|x| **x > 2);

// position (findIndex)
let index = v.iter().position(|x| x > 2);