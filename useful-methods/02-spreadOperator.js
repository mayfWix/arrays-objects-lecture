let person = { name: 'Alice', age: 25 };
let job = { title: 'Developer', company: 'TechCorp' };

let employee = { ...person, ...job };
console.log(employee);

