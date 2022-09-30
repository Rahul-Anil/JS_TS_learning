var v = {}; // these are literally called Objects as well ? (huh)
console.log("This is of type Map");
console.log(`var: ${typeof v}`);
console.log(`${v instanceof Map}`);
console.log(v);

console.log("\nWorking with Objects");
v["name"] = "Rahul";
v["age"] = 25;
console.log(v);

console.log("Removing an element from the object");
delete v.age;
console.log(v);
