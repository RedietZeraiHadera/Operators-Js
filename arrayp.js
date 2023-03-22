let girl = ["Rediet",22,45.5,true];
let boy = ["chap",25,67.5,false];
console.log(girl);
console.log(boy);
girl.push("Zebera");
console.log(girl);
girl.unshift("girl");
console.log(girl);
girl.shift("girl");
console.log(girl);
girl.pop();
console.log(girl);
let human = girl.concat(boy);
console.log(human);
let num = [1,2,3,4,5,6]
let numb = num.map(function(i){
return i*3
})
console.log(numb);
