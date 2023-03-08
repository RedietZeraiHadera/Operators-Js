//Q1
let x = "extravaganza";
console.log(x[8], x[9], x[10], x[11]);
//q2

const e = `eat`;
const food = `The quick brown fox ${e} over the lazy dog`;
console.log(food);
//q3

const story = "The quick brown fox jumps over the lazy dog"
let count = (story.match(/the/g)||[]).length;
console.log(count);
let count2 = (story.match(/brown/g)||[]).length;
console.log(count2);
//q4


const a = "wonderful";
let result = a.toUpperCase("wonderful");
console.log(result);

const b = "amazing";
const c = "UndERneath"
let convert = b.toLowerCase("amazing");
let convert1 = c.toLowerCase("UndERneath");
console.log(convert);
console.log(convert1);

let d = "A wonderful world";
d=d.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(d);
