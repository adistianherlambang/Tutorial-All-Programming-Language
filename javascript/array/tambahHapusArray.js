let a = [1, 2, 3];

// push
a.push(4);            // [1, 2, 3, 4]

// pop
a.pop();              // [1, 2, 3]

// unshift
a.unshift(0);         // [0, 1, 2, 3]

// shift
a.shift();            // [1, 2, 3]

// splice (hapus)
a.splice(1, 1);       // hapus index 1 → [1, 3]

// splice (tambah)
a.splice(1, 0, 2);    // tambah di index 1 → [1, 2, 3]

// slice
const b = a.slice(1); // [2, 3]