
let array1=["ekip","it","solutions"];
let array2=[1,2,3,4,5];
array3=array1
array1=array2
array2=array3
console.log(array1);
console.log(array2);
// console.log(array1.length);
console.log(array2.length);
console.log(array1.indexOf("ekip"));
console.log(array1.indexOf("it"));
console.log(array1.indexOf("solutions"));
//console.log(array1.indexOf(0));
array1.push("private", "limited");
console.log(array1);
console.log("the length of the final array is:",array1.length);
let array=array2.slice(1,4);
console.log(array);
for(let i=0;i<=10;i++)
{
    console.log(i)
}

//map() method
let array2=[1,4,9,16]
console.log(array2.map(Math.sqrt))

//filter()
let number=[1,2,3,4,5,6]
let oddnum=number.filter(function(numbers) { return number>=2});
console.log(oddnum);



