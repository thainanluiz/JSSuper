const jssuper = require("jssuper");

// EX
// Output = Lorem sit amet
jssuper.extractor("Lorem ipsum dolor sit amet", "ipsum dolor").then((sentence) => {
  console.log(sentence);
});
