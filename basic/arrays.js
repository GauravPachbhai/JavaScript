// const arr1 = [0,1,2,3,4,5];
// const arr2 = new Array(1,2,3,4,5);

// arr1.push(6);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);

// console.log("A===>",arr1);

// const myarr = arr1.slice(1,3);
// console.log(myarr);
// console.log("B===>",arr1);

// const myarr1 = arr1.splice(1,3);
// console.log(myarr1);
// console.log("C===>",arr1);

console.log(Array.isArray("Gaurav"));
console.log(Array.from("Gaurav"))
console.log(Array.from({name:"Gaurav"}))

let score1= 100;
let score2 = 200;
let score3  = 3000;

// console.log(Array.of(score1,score2,score3));

const marvel = ["thor","ironman","blackWidow"];
const dc = ["bataman","superman","aquaman"];

const all_hero = [...marvel,...dc];
console.log(all_hero);