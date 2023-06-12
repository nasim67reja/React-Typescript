// Primitives : number,string,boolean
// More complex types : Arrays,objects
// Function types, parameteres
// type number
var age; //Number is pointed js object not the type
age = 23;
// type string
var userName;
userName = "Nasim Reja";
// Boolean
var isStudent;
isStudent = true;
/// More Complex types
// array
var hobbies; // array of string. the type also could be number and boolean
hobbies = ["Reading Book", "Sports"];
// Objects
// let person: any; // This is allow us to assign any type of data. but it violate the main purpose of using typescripts
// using objects for specific data we can create an object like this
var person;
person = {
    name: "Nasim Reja",
    age: 25
};
// Array of objects
var people;
people = [
    {
        name: "Nasim Reja",
        age: 25
    },
    {
        name: "adil",
        age: 22
    },
];
// Type inference
// here we could ignore the type declaration
var practice = "Practice basics of typescript";
// practice=12;//it's not work
// Union type
// it allows us to write multiple data store variable
// union types is a type definition that allows us to more than one type
var practice1 = "Practice basics of typescript";
// now we can assign number to this variable
practice1 = 12;
var alPerson;
alPerson = {
    name: "x",
    age: 12
};
// or we could write Person of array
var arrPerson;
// Functions and Functions Type
// we also need to declare the funtion return data type
// here we also could get the benefit of type inference and union type
function add(a, b) {
    return a + b;
}
// no return value just printing
function printOutput(value /* because we want just print*/) {
    console.log(value);
}
// Diving into Generics
