/* A functions this reference the execution context for that call determined 
entirely by how the function was called*/

var Workshop = {
  teacher: "Rahul",
  ask(question) {
    console.log(this.teacher, question);
  },
};

Workshop.ask("what is the question");
console.log(`workshop: ${Workshop}`);
console.log(`workshop type: ${typeof Workshop}`);

console.log("\nexample 2");
function ask2(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var mycontext = {
    teacher: "Suzzy",
  };
  ask2.call(mycontext, "Why");
}

otherClass();
