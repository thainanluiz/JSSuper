const jssuper = require("jssuper");

// EX 1
// Output = false
let a = 0;

console.log(jssuper.isSymb(a));

// EX 2
// Output = false
let b = "0";

console.log(jssuper.isSymb(b));

// EX 3
// Output = c is not a symbol
let c = "";

if (jssuper.isSymb(c)) {
  console.log("c is a symbol");
} else {
  console.log("c is not a symbol");
}

// EX 4
// Output = false
let d = null;

console.log(jssuper.isSymb(d));

// EX 5
// Output = true
let e = Symbol("0");

console.log(jssuper.isSymb(e));

// EX 6
// Output = true
let f = Symbol("");

console.log(jssuper.isSymb(f));

// EX 7
// Output = true
let g = Symbol("Symbol");

console.log(jssuper.isSymb(g));

// EX 8
// Output = true
let h = Symbol.for("0");

console.log(jssuper.isSymb(h));
