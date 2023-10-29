var array1=["Chandu","Loki","Marif","Khasim"];
var array2=["BMW","Audi","BENZ"];

 //length of first array
 console.log("The length of the Array is : ",array1.length); //3

 //index of the first array//
 console.log("Index of Loki is ",array1.indexOf('Loki')); 	//1

 //slice of the first array//
console.log(array1.slice(0,1)); /*output:["Chandu","Loki"]*/


//pop of the first element//
 console.log("The poped element is : ",array1.pop()); 

 //push the array element//
console.log(array1.push("Hari")); 

//add first array and second array using third array//
  var array3=array1 + array2;
 console.log("The array1 + array2 is : ",array3);
 console.log("The 1st element in array1 is : ",array1[0])

 //shift --> to remove 1st element//
 console.log(array1.shift())

//unshift --> Add element in 0th index//
console.log(array2.unshift()) ;

//replace the first element to second array//
 var index=array1.indexOf(array2)
if(index !=array1.length){
array1[index]=array2;
 }
console.log("The array1 is : ",array1)
console.log(array2.includes(array1))
console.log("The array2 is : ",array2)
console.log("Array1 + array2 is : ",array3)
//Array.prototype.splice.apply(array2, [0, array1.length].concat(array2));

console.log("Copying the array2 in array1 : ",array1.copyWithin(array2))
console.log("The array 2 is : ",array2)
console.log("Array concation : ",array1.concat(array2))

console.log("Copy or replace : ",array1=array2)

var names=["Chandu","Loki","Marif"];
var count=[1,2,3,4];
console.log(count=names)
console.log(count)

first_array=[1,2,3,4,5,6]
second_array=[6,5,4]
third_array=first_array
first_array=second_array
second_array=third_array
console.log(first_array)
console.log(second_array)