/* CLOSURE:
closure is when a function remembers the variables outside of it even when you
pass the function elsewhere*/

function ask(question) {
  setTimeout(function waitasec() {
    console.log(`question: ${question}`); // this is an example of a function that is acessing the variable question outside its scope
  }, 100);
}

ask("Is this a question ?");

function say(statement) {
  return function sayStatement() {
    console.log(statement);
  };
}

var s = say("This is my statement");
console.log(s());
