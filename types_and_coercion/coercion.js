// This is basically how type conversion is done in JS

// string concat is one way to type convert from number to string
var a = "Rahul is ";
var b = 25;
var c = " years old";

console.log(a + b + c);

var f = 1.12645;
var ff = 1.12645;
console.log(`f: ${f}`);
f = f.toFixed(2);
console.log(`f fixed 2: ${f}`);
ff = ff.toPrecision(2);
console.log(`ff precision 2: ${f}`);

let x = "false";
if (x) {
  console.log("string makes it true");
} else {
  console.log("string makes it False");
}
