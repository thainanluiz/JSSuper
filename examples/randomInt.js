const jssuper = require("jssuper");

// EX 1
console.log(jssuper.randomInt(1, 999));

// EX 2
let a = null;

a = jssuper.randomInt(1, 9);
console.log(a);

if (a <= 5) {
  console.log("OK");
} else {
  console.log("NOT OK");
}
