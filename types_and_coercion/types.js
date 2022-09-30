var v;
console.log(`var: ${typeof v}`);

var v = [];
console.log("This should have been array");
console.log(`var: ${typeof v}`);
console.log(
  `this is used to check if it is an array or not${Array.isArray(v)}`
);
console.log(`${v instanceof Array}`);

var v = null;
console.log("This should have been null type");
console.log(`var: ${typeof v}`);

var v = function () {};
console.log("This is a function");
console.log(`var: ${typeof v}`);

var v = {}; // these are literally called Objects as well ? (huh)
console.log("This is of type Map");
console.log(`var: ${typeof v}`);
console.log(`${v instanceof Map}`);
