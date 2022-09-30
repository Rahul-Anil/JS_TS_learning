// this is how comments are present in js

if (2 == 2.0) {
  console.log("True");
} else {
  console.log("False");
}

if (2 === 2.0) {
  console.log("True");
} else {
  console.log("False");
}

// this is the difference b/w the 2 operators in JS

if ("10" == 10) {
  console.log("This does type conversion before comparison");
}

if ("10" === 10) {
  console.log("=== and == are the same");
} else {
  console.log("This does type conversion after");
}
