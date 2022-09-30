// let will only create a variable within the curly braces kind of thing

var numbers = [];

for (let i = 0; i < 20; i++) {
  numbers.push(i);
}

console.log(numbers);

// Looks like arrays are like lists in python
numbers.push("A");
console.log(numbers);

// i can also use for looks like below in JS
for (let n of numbers) {
  console.log(n);
}

// while loops
console.log("While loop");
while (numbers.length > 0) {
  console.log("numbers: " + numbers.pop());
}

// .shift() for an array will remove the element from the beginning

// python like f" " syntax
let test = "TEST";
console.log(`this is a ${test}`);

// there also exists do while loop in JS
var num = 10;
do {
  console.log(`num: ${num}`);
} while (num > 100);
