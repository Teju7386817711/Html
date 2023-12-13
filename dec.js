const person = {
    name: 'tej',
    age:23
}

// object 2
const student = {
    gender: 'female'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);