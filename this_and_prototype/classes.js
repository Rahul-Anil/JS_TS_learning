class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Rahul");
var reactJS = new Workshop("Ashley");

deepJS.ask("This class is taken by ");

reactJS.ask("Class will be taken by prof ");
