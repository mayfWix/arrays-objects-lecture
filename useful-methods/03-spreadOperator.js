let originalObject = { name: 'Alice', age: 25 };
let copiedObject = { ...originalObject };

copiedObject.age = 30;

console.log(originalObject);
console.log(copiedObject);

