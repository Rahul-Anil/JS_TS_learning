var name = "Rahul";

{
  let name = "Ashley"; // let means this variable is only defined withing the scope of the braces
  let initials = "James";
  console.log(`name: ${name}`);
}

console.log(`name: ${name}`);
// console.log(`initials: ${initials}`); initials variable is not defined in the global scope

// another way that we end up using this variable is in the if statement and for statement
// really helpful for the variables that are used only withing the loop

/* try and only keep lets in the scope of the braces and do not use then in the function scope 
or the global scope

In the case of the function scope still try and keep it var as they are still going to remain
the same withing the scope of the func so there is no need to keep them in the let scope*/

var idx = 100;

for (let idx = 0; idx < 10; idx++) {
  console.log(`idx: ${idx}`);
}

console.log(`idx out: ${idx}`);
