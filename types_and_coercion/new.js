var date = new Date("November 25 1997");
console.log(date);
// console.log(date.toUTCString());
console.log(`date UTC: ${date.toUTCString()}`);

var age_s = String(25);
console.log(`age_s: ${age_s}`);
console.log(`age type: ${typeof age_s}`);

var age = Number(age_s);
console.log(`age: ${age}`);
console.log(`age type: ${typeof age}`);
