const jssuper = require("jssuper");

// EX 1
function a() {
  jssuper.fixedDelay().then(() => {
    console.log("FIXED DELAY");
  });
}

a();

// EX 2
async function b() {
  await jssuper.fixedDelay(10000);
  console.log("10s DELAY");
}

b();
