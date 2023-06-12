// Let's starts with premitive
let myNum: string;
myNum = "Nasim Reja";
let myAge: number;
myAge = 23;

let iAmStrong: boolean;
iAmStrong = true;
console.log(myNum, myAge, iAmStrong);

///////////////// Objects Type

// array

let students: string[];

students = ["a", "b"];
console.log(`The Students Are ${students}`);

// object
// let person: {
//   name: string;
//   age: number;
// };
// person = {
//   name: "Nasim Reja",
//   age: 25,
// };
// console.log(person);

// array of objects
// let people: {
//   name: string;
//   age: number;
// }[];

// Type inference
let course = "React - The Complete Guide";
// course=12 // it will not work here.
// ts by deafult try to set the variable type. this feature known as type inference

// Type Union

let id: number | string;
id = "dj1k2j3jk";
id = 1245;
