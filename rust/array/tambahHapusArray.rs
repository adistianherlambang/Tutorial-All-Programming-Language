let mut v = vec![1, 2, 3];

// push
v.push(4);                 // [1, 2, 3, 4]

// pop
v.pop();                   // Some(4)

// insert (mirip unshift / splice insert)
v.insert(0, 0);            // [0, 1, 2, 3]

// remove (mirip splice remove)
v.remove(0);               // [1, 2, 3]

// drain (hapus range)
v.drain(1..2);             // hapus index 1

// clear
v.clear();                 // []