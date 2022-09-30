// These are what are called as function expressions

// This is an example of an unnamed function expression
var clickhandler = function () {
  console.log("Click Handler");
  return 10;
};

// This is an example of an unnamed function expression
var keyhandler = function boo() {
  console.log("Key Handler");
};

// console.log(boo()); so i can not call it as boo() ok got it
var a = keyhandler();
console.log(`a: ${a}`); // so its running the function and a is of type undefined so that is also being printed
console.log(`a type: ${typeof a}`); // undefined

console.log(`keyhandler name: ${keyhandler.name}`); //boo

console.log(clickhandler()); //10 this will return function print ("Click Handler") first then will print the returned value 10
console.log(`clickhandler name: ${clickhandler.name}`); //clickhandler

/* Named function expressions are considered better than unnamed function expression */

// IIFEs: Immediately invoked function expressions
console.log("\n");
console.log("IIFE \n");

var name = "Rahul";

(function notmyName() {
  var name = "Ashley";
  console.log(`name: ${name}`); //Ashley
})(); // this is immediately inovked at this point

console.log(`name: ${name}`); //Rahul

console.log("name check 2 \n");
var name2 = "Rahul2";

(function notmyName2() {
  name2 = "Ashley2";
  console.log(`name: ${name2}`); // Ashley2
})();

console.log(`name: ${name2}`); // Ashley2
