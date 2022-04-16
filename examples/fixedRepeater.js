const jssuper = require("jssuper");

// EX 1
let a = 0;

jssuper.fixedRepeater(
  () => {
    console.log(a);
    a++;
  },
  10,
  10
);

// EX 2
let b = 0;

function c() {
  console.log(b);
  b++;
}

jssuper.fixedRepeater(c, 10, 10);
