console.log("Hello, World!");
console.count("This is a simple JavaScript program.");

console.time("Execution Time");
for (let i = 0; i < 100; i++) {
  console.log(i);
}
console.timeEnd("Execution Time");
//these are the basic console methods in JavaScript.htere mainly used in debugging and logging information to the console.

//variables in JavaScript can be declared using var, let, or const. The choice of which to use depends on the scope and mutability of the variable.
// var is function-scoped and can be redeclared and updated. let is block-scoped and can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared.
//try to avoid using var in modern JavaScript code, as let and const provide better scoping and immutability features.
//try to use const by default, and only use let when you need to reassign the variable. This helps to make your code more predictable and easier to understand. const reduces the risk of accidental reassignment and makes it clear that the variable should not change after its initial assignment.
var num = 10;
console.log(num); // Output: 10

let name = "John";
console.log(name); // Output: John
name = "Doe";
console.log(name); // Output: Doe
// in let we can reassign the value of the variable, but we cannot redeclare it in the same scope.
// dont't write let and const in the global scope, as it can lead to unexpected behavior and conflicts with other scripts. Instead, use them inside functions or blocks to limit their scope and avoid polluting the global namespace.
//initailly declare every variable with const, and only use let when you need to reassign the variable. This helps to make your code more predictable and easier to understand. const reduces the risk of accidental reassignment and makes it clear that the variable should not change after its initial assignment.

const pi = 3.14;
console.log(pi); // Output: 3.14
// in const we cannot reassign the value of the variable, and we cannot redeclare it in the same scope.


const product = {
  name: "Laptop",
  price: 1000,
  brand: "Dell"
};

//we decalred product as constant not the properties of the object. We can still change the properties of the object, but we cannot reassign the product variable to a new object.
product.price = 1200;
console.log(product.price); // Output: 1200

// product = {
//   name: "Phone",
//   price: 500,
//   brand: "Samsung"
// }; 
// This will throw an error because we cannot reassign a const variable.Complete reassignment of a const variable is not allowed, but we can modify the properties of the object it references.

//datatypes in JavaScript can be divided into two main categories: primitive types and reference types. Primitive types include string, number, boolean, null, undefined, and symbol. Reference types include objects, arrays, and functions.

const color = "blue";
console.log(typeof color); // Output: string

const age = 25;
const age2 = 30.5;
const age3 = 1e6; // scientific notation
const age4 = NaN; // Not a Number
const age5 = 10n; // BigInt
console.log(typeof age); // Output: number
console.log(typeof age2); // Output: number
console.log(typeof age3); // Output: number
console.log(typeof age4); // Output: number
console.log(typeof age5); // Output: bigint

const isActive = true;
console.log(typeof isActive); // Output: boolean

const person = null;
console.log(typeof person); // Output: object

let message;
console.log(typeof message);// Output: undefined

const uniqueId = Symbol("id");//unique + immutable data type that can be used as identifiers for object properties.
console.log(typeof uniqueId); // Output: symbol
//symbols are unique and immutable data types that can be used as identifiers for object properties. They are often used to create private or hidden properties in objects, as they cannot be accessed or modified directly from outside the object.

const uniqueruneid = Symbol("runeid");
console.log("Rune ID: " + uniqueruneid.toString(), "Type: " +
  typeof uniqueruneid); // Output: symbol

//there are 7 primitive data types in JavaScript: string, number, boolean, null, undefined, symbol, and bigint. All other types are reference types, which include objects, arrays, and functions. Reference types are mutable and can be modified after they are created, while primitive types are immutable and cannot be changed once they are created.
//in objects, we can store multiple values as key-value pairs. Objects are mutable and can be modified after they are created. We can access the properties of an object using dot notation or bracket notation.

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue"
};

//donot copy the reference of an object to another variable, as it can lead to unexpected behavior and bugs in your code. Instead, create a new object with the same properties and values using Object.assign() or the spread operator (...).
const cloneCar = car; // This creates a reference to the original object, not a new object.
//shalllow copy vs deep copy: A shallow copy creates a new object with the same properties and values as the original object, but if the original object contains nested objects or arrays, the shallow copy will still reference those nested objects or arrays. A deep copy creates a new object with the same properties and values as the original object, including any nested objects or arrays, so that changes to the original object do not affect the copied object.
const shallowCopy = Object.assign({}, car); // This creates a shallow copy of the original object.
const carCopy = Object.assign({}, car);
const carCopy2 = { ...car };
// all the changes done to carCopy will not affect the original car object, as they are two separate objects in memory.
console.log(carCopy); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'blue' }


// if we have nested objects or arrays, we will use structuredClone() to create a deep copy of the object. structuredClone() is a built-in method in JavaScript that creates a deep copy of an object, including any nested objects or arrays. It is available in modern browsers and Node.js versions 17 and above.

const nestedObject = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};
const deepCopy = structuredClone(nestedObject);//this is deep copy.
// all the changes done to deepCopy will not affect the original nestedObject, as they are two separate objects in memory.
console.log(deepCopy); // Output: { name: 'John', address: { street: '123 Main St', city: 'New York', state: 'NY' } }

const fuel = "142.234";
console.log(parseInt(fuel)); // Output: 142
const fuel2 = "142";
console.log(parseFloat(fuel2)); // Output: 142

const thrustforce = 4.624;
console.log(Math.round(thrustforce)); // Output: 5


//string

const message1 = "Hello, World!";

const message2 = String("Hello, World!");

const message3 = new String("Hello, World!"); // This creates a String object, not a primitive string.

const templateLiteral = `Hello, ${name}!`; // This is a template literal, which allows for string interpolation and multi-line strings.

console.log(message1);

//silent fail in string

let interceptedMessage = "Hello, World!";
interceptedMessage[0] = "h"; // This will not change the string, as strings are immutable in JavaScript.
console.log(interceptedMessage); // Output: Hello, World!


//string methods

const str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.indexOf("World")); // Output: 7
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.replace("World", "Universe")); // Output: Hello, Universe!
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
console.log(str.includes("Hello")); // Output: true

console.log(str.charAt(0)); // Output: H
console.log(str.charCodeAt(0)); // Output: 72
console.log(str.charAt(999)); // Output: '' (empty string, as the index is out of bounds)


console.log(void "Hello, World!"); // Output: undefined
//what happen when we do null or undefined in JavaScript? null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that an object property does not exist. undefined is a primitive value that represents the absence of a value or the uninitialized state of a variable. It is often used to indicate that a variable has not been assigned a value or that a function does not return a value.null is preferd over undefined, as it is more explicit and intentional. undefined can be caused by uninitialized variables or missing function return values, which can lead to unexpected behavior in your code. Using null can help to avoid these issues and make your code more predictable and easier to understand.


//conditional

