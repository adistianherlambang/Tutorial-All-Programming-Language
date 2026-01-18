const arr = ["a", "b", "c"];

// keys
for (const k of arr.keys()) {
  console.log(k);        // 0, 1, 2
}

// values
for (const v of arr.values()) {
  console.log(v);        // "a", "b", "c"
}

// entries
for (const [i, v] of arr.entries()) {
  console.log(i, v);     // 0 "a", 1 "b", 2 "c"
}