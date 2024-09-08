let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
// Removes and returns the last element

let lastElement = courses.pop();
// Removes and returns the first element
console.log(lastElement);
console.log(courses);


let firstElement = courses.shift();
console.log(firstElement);
console.log(courses);

// Removes 2 elements starting from index 1
const spliced =courses.splice(1, 2);
console.log(spliced);
console.log(courses);

