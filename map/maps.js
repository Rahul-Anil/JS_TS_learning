/* Map objects holds key value pair and remembers the insertion order of the keys*/

var map1 = new Map();
map1.set("a", "1");
map1.set("b", "2");
map1.set("c", "3");

console.log(map1);
console.log(map1.get("a")); //1

map1.set("a", "100");
console.log(map1.get("a")); //100

console.log(map1.size);

map1.delete("b");
console.log(map1.size);

console.log("\nitterating over values");
for (i of map1.values()) {
  console.log(i);
}

var map2 = new Map([
  ["apples", 100],
  ["banana", 200],
]);
console.log(map2);
