/* this works so similar to classes in python */

function workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Rahul");
var reactJS = new Workshop("Ashley");

deepJS.ask("This class is taken by ");

reactJS.ask("Class will be taken by prof ");
