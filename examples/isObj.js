const jssuper = require("jssuper");

// EX 1
// Output = true
let a = { key: 1, value: "ok" };

console.log(jssuper.isObj(a));

// EX 2
// Output = true
let b = {};

console.log(jssuper.isObj(b));

// EX 3
// Output = false
let c = 0;

console.log(jssuper.isObj(c));

// EX 4
// Output = true
let d = null;

console.log(jssuper.isObj(d));

// EX 5
// Output = false
let e = "Awesome string!";

console.log(jssuper.isObj(e));
