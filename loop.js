
console.log("Printing ODD numbers upto 20")
odd = 1;
do
{
    console.log('Odd numbers:',odd)
    odd = odd +2;
}while(odd<=20)

console.log("<------------------------------------------------->\nEven numbers using forloop.")

for(let i=3;i!=5;++i)
{
    console.log("Pre increment : ",i)
}

for(let i=0;i!=5;i++)
{
    console.log("post increment : ",i)
}

console.log("<------------------------------------------------->")
console.log("if,else conditon")
age = 18
if(age<18)
{
    console.log("Persons is not adult")
}
else
{
    console.log("Person is adult")
}

console.log("<------------------------------------------------->")
console.log("If, else, else if conditions.")


n=0 // default variable
if(n<0){
    console.log(n,"Is Negative number")
}
else if(n>0)
{
    console.log(n,"is Positive Number")
}
else if(n==0)
{
    console.log(n,"Is zero")
}
else{
    console.log(n,"is not a number.")
}

