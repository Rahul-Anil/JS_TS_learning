var age = 100;

if (age < 18) {
  console.log("Not legal adult");
} else if (21 < age && age < 25) {
  console.log("Can drink");
} else {
  console.log("Age >= 25");
}

// wow looks like i cant just go 5 < age <10 in an if statement
if (18 < age && age < 25) {
  console.log("NOOO!!!");
} else {
  console.log("YESS!!!");
}
