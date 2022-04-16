const jssuper = require("jssuper");

// EX 1
// Output = true
let a = 0;

console.log(jssuper.isNum(a));

// EX 2
// Output = false
let b = "0";

console.log(jssuper.isNum(b));

// EX 3
// Output = c is not a number
let c = "";

if (jssuper.isNum(c)) {
  console.log("c is a number");
} else {
  console.log("c is not a number");
}

// EX 4
// Output = false
let d = null;

console.log(jssuper.isNum(d));

// EX 5
// Output = true
let e = 0.1;

console.log(jssuper.isNum(e));

// EX 6
// Output = true
let f = Infinity;

console.log(jssuper.isNum(f));

// EX 7
// Output = true
let g = NaN;

console.log(jssuper.isNum(g));

// EX 8
// Output = true
let h = Math.LN10;

console.log(jssuper.isNum(h));

// EX 9
// Output = true
let i = Number("5");

console.log(jssuper.isNum(i));
