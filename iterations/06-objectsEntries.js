const student = {name: 'May', age: 28}


for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}
