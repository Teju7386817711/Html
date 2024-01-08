
//CONSTRUCTOR FUNCTION

function Person (name,age) {
    this.name = name,
    this.age = age,
    this.greet = function () {
     if(this.name=='tej')//--way1--using condition we are printing hi instead of hello
     {
        return('hello');
    }
    else
    {
        return('hi')
    }
}
}

    // this.greeting = function () {
    //     return('hi');
    // }


// creating objects
const person1 = new Person('teja',23,'hello','hi');
const person2 = new Person('teja',23,'hello','hi');
// person2.greet = function () { 
//     return('hi');//--way2--to print hi instead of hello in place of person2
// }


// access properties
console.log(person1.name,person1.age,person1.greet());  
console.log(person2.name,person2.age,person2.greet());   
