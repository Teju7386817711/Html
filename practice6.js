

//USING MULTIPLE OBJECTS
function Person(name,age){
    this.name='myth',
    this.age=23,
    this.greet= function() 
    {
        if(this.name=='tej')
        {
            return('hello');
        }
        else
        {
            return('hi');
        }
       
    }
}
//creating objects//
const person1=new Person('myth',23,'hello');
const person2=new Person('myth',23,'hi');


//for printing
console.log(person1.name,person1.age,person1.greet());
console.log(person2.name,person2.age,person2.greet());


