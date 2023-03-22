//length
const word = "Rediet"
console.log(word.length) 
let word2 = "Rediet Zerai"
console.log(word2.length)
console.log(word2.replace("Zerai","Zebera"))
//index of and last index of
let boys = "I love Jesus, I also love God, and I love Holyspirit"
console.log(boys.indexOf("love"))
console.log(boys.lastIndexOf("love"))
console.log(boys.startsWith("I"))
console.log(boys.endsWith("t"))
console.log(boys.toUpperCase())
console.log(boys.toLowerCase())
console.log(boys.includes("Jesus"))
console.log(boys.includes("Rediet"))
//repeat
console.log(boys.repeat(2))
//charAt
console.log(boys.charAt(21))

//assignment
// extract the first chars "beautiful"
let baby = "beautiful";
let ady = baby.slice(0,4);
console.log(ady);
let ada = baby.substring(0,4);
console.log(ada);
// insert"eat" at index 10
let food = "I did not have appetite today"
let migib = food.slice(0,10)+ "eat "+ food.slice(10);
console.log(migib);

let bab = "beautiful";
let nbab = bab.slice(-4);
console.log(nbab);

const story = "the quick brown fox jumped over the lazy dog";
let newstory = story.valueOf("the");
console.log(newstory);
let n = "wonderful";
let b = n.toUpperCase();
console.log(b);


let x = "BEneath"
let r = x.toLowerCase();
console.log(r);

let l = "A beautiful wedding"


