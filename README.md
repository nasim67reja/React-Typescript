# Typescript Basics

## how to install typescript into your computer

- first npm init -y
- then , npm i typescript
- then npx tsc {filename}

## Basics

```ts
// Primitives : number,string,boolean
// More complex types : Arrays,objects
// Function types, parameteres

// type number
let age: number; //Number is pointed js object not the type
age = 23;

// type string
let userName: string;
userName = "Nasim Reja";

// Boolean

let isStudent: boolean;
isStudent = true;
```

**_so number,string,boolean are the basic premitive data type of javascript_**

## Complex data type (array,objects)

```ts
/// More Complex types
// array
let hobbies: string[]; // array of string. the type also could be number and boolean
hobbies = ["Reading Book", "Sports"];

// Objects

// let person: any; // This is allow us to assign any type of data. but it violate the main purpose of using typescripts
// using objects for specific data we can create an object like this
let person: {
  name: string;
  age: number;
};
person = {
  name: "Nasim Reja",
  age: 25,
};

// Array of objects
let people: {
  name: string;
  age: number;
}[];
people = [
  {
    name: "Nasim Reja",
    age: 25,
  },
  {
    name: "adil",
    age: 22,
  },
];
```

## Type inference

- here we could ignore the type declaration

```ts
let practice = "Practice basics of typescript";
// practice=12;//it's not work
```

## Union type

- it allows us to write multiple data store variable
- union types is a type definition that allows us to more than one type

```ts
let practice1: string | number = "Practice basics of typescript";

// now we can assign number to this variable
practice1 = 12;
```

## Type Aliases

```ts
type Person = {
  name: string;
  age: number;
};
let alPerson: Person;
alPerson = {
  name: "x",
  age: 12,
};

// or we could write Person of array
let arrPerson: Person[];
```

## Functions and Functions Type

- we also need to declare the funtion return data type
- here we also could get the benefit of type inference and union type

```ts
function add(a: number, b: number): number | string {
  return a + b;
}
```

- no return value just printing

```ts
function printOutput(value: any /* because we want just print*/): void {
  console.log(value);
}
```
