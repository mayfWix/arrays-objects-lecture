let student = {
    name: 'John Doe',
    age: 20,
    log(message) {
        console.log(message);
    },
    introduce: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
student.log("Welcome to the JavaScript class!");
student.introduce();
