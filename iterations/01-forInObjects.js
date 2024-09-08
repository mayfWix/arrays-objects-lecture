let student = {
    name: 'John Doe',
    age: 20,
    city: 'New York'
};
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
