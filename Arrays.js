//ARRAYS
console.clear();
var friendList=['Sam', 'Tom', 'Tim', 'John', 'Bob'];
console.log(friendList);//["Sam", "Tom", "Tim", "John", "Bob"]
console.log(friendList[0]);//"Sam"

//When we want to add new elements we need to use push function
friendList.push('Jack');
console.log(friendList);//["Sam", "Tom", "Tim", "John", "Bob", "Jack"]
//This function is used for adding elements  at the begining
friendList.unshift('Mert');
console.log(friendList);//["Mert", "Sam", "Tom", "Tim", "John", "Bob", "Jack"]
//This removes the first elements
friendList.shift();
console.log(friendList);//[ "Sam", "Tom", "Tim", "John", "Bob", "Jack"]

//Remove the last element of the array
friendList.pop();
console.log(friendList);//["Sam", "Tom", "Tim", "John", "Bob"]

//ARRAYS
console.clear();
var ages=[10,14,34,16,10];
console.log(ages);//[10, 14, 34, 16, 10]
console.log(typeof ages);//object

//Get the first index
console.log(ages.indexOf(10));//0

//Get a specific item starting from a specific index

console.log(ages.indexOf(10,1));//4
console.log(ages.indexOf(14,2));//-1 because there is no 14 after the 2nd index

//Get this specific item starting from the last
console.log(ages.lastIndexOf(10));//4

//includees function returns a boolean data type if an item exist or not

console.log(ages.includes(14));//true

//Look if you have an item after a specific index

console.log(ages.includes(14, 3));// false

//Look for an item that does not exist
console.log(ages.includes('apple'));//false

//This is an empthy array
//var ages= new Array();//[]

//Give aspecific number to array
//var ages= new Array(10);//[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

var ages= new Array(null, "Ibrahim",10,true);//[null, "Ibrahim", 10, true]

console.log(ages);

//ARRAYS
console.clear();

var fruits=['apple', 'orange', 'banana', false, 10];

//We will splice function for deletion, insertion,etc.

//Delete items using index
fruits.splice(2,1); //2. indexten itibaren 1 elemen sil
console.log(fruits);//["apple", "orange", false, 10]

//insert new items deleting or not existing items

//  fruits.splice(1,0,"kiwi","peach"); //1. indexten itibaren element silmeden kiwi ve fruit i ekle
// console.log(fruits);//["apple", "kiwi", "peach", "orange", false, 10]

// fruits.splice(2,2,"cherry", "strawberry","appricot");
// console.log(fruits);//["apple", "orange", "cherry", "strawberry", "appricot",10]

fruits.splice(-1,1);//son indexten itibaren 1 tane sil
console.log(fruits);//["apple", "orange", "banana", false]










