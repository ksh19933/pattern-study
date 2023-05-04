import add, { multiply, square, subtract } from "./math";

console.log(add(2, 3));
console.log(multiply(2));
console.log(subtract(2, 3));
console.log(square(2));

/* Error: privateValue is not defined */
// console.log(privateValue);

/* Error: add has  already been declared */
// function add(...args) {
//   return args.reduce((acc, cur) => cur + acc);
// }
