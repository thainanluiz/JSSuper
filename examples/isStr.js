const jssuper = require("jssuper");

// EX 1
// Output = true
let a = "Awesome string!";

console.log(jssuper.isStr(a));

// EX 2
// Output = true
let b = "0";

console.log(jssuper.isStr(b));

// EX 3
// Output = c is not a string
let c = 0;

if (jssuper.isStr(c)) {
  console.log("c is a string");
} else {
  console.log("c is not a string");
}

// EX 4
// Output = false
let d = null;

console.log(jssuper.isStr(d));

// EX 5
// Output = true
let e = "";

console.log(jssuper.isStr(e));

// EX 6
// Output = true
let f = String(0);

console.log(jssuper.isStr(f));
