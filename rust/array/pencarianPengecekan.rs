let v = vec![10, 20, 30, 20];

// contains
v.contains(&20);           // true

// iter().position
v.iter().position(|x| *x == 20); // Some(1)