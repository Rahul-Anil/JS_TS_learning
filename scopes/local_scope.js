var name = "Rahul";

function check_name() {
  var name = "Ashley";
  console.log(`withing function scope: ${name}`);
}

check_name();
console.log(`outside function scope ${name}`);

var my_name = "Rahul";
const age = 25;

function not_my_name() {
  /* when we look at this variable my_name we see that there is no new declaration
  of the variable in the local scope and hence it looks at the global scope of the variable and
  reassigns it*/
  my_name = "Ashley";
  another_name = "NotAshley"; // this creates a variable in the global scope
  //   age = 24; this wont work because of const and i can see this as being a good use case for const
  console.log(`name: ${my_name}`);
  console.log(`age: ${age}`);
}

not_my_name();
console.log(`name: ${my_name}`);
console.log(`age: ${age}`);
console.log(`not name: ${another_name}`);
