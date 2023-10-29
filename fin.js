// constructor function
class Person {
    constructor(name,age,city,_greet)
    {
        this.name = name,
            this.age = age,
            this.city = city,
            // this.msg = msg,
            this.greet=function(){return ("Hello");};}}
// create objects
const person1 = new Person("Loki",27,"Ontario,Canada");
const person2 = new Person("Chandu",26,"Hyderabad,India");
const person3 = new Person("Marif",26,"Dubai,Dubai")
person2.greet=function(){return "hi";}
// access properties
console.log(person1.name,person1.age,person1.city,person1.greet())
console.log(person2.name,person2.age,person2.city,person2.greet())
console.log(person3.name,person3.age,person3.city,person3.greet())