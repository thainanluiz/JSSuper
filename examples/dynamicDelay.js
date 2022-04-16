const jssuper = require("jssuper");

// EX 1
function a() {
  jssuper.dynamicDelay().then(() => {
    console.log("OK AFTER AN DYNAMIC DELAY");
  });
}

a();

// EX 2
async function b() {
  await jssuper.dynamicDelay(10000);
  console.log("OK AFTER RANDOM DYNAMIC DELAY WITH MAX 10s");
}

b();
