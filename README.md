# Why use TypeScript.?

let's discuss a problem in javascript code. suppose you are working in a large scale project with your team. then there is a function define like this

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```

in this add function we want that two parameter will be added then the result will be return but the problem is js doesn't strict to number if anyone in the team
use this function and pass string as a parameter then the function will also work. but this is a big problem beacuse the function was only responsible for adding two numbers not concat them.
so if any member of the team give string then the programm does not show any error but it's violates the purpose. in this case typeScript will save use. if the define the parameter type to number and then anyone pass the parameter as a string in this case typescipt will generate error immediatle.

using typescripts

```ts
function add(a: number, b: number) {
  return a + b;
}
```
