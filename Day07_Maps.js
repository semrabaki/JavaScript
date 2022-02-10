// //This is first way of initializing a map

// const fruits =([
      
//         ["apples", 500],
//         ["bananas", 400],
//         ["oranges", 300],
//       ]
      
//       );
  
     


// const fruits = new Map([
      
//         ["apples", 500],
//         ["bananas", 400],
//         ["oranges", 300],
//       ]
      
//       );

const fruits= new Map ();

    fruits.set("apples", 500);
      fruits.set("bananas", 400);
      fruits.set("oranges", 300);

console.log(fruits);//[object Map] { ... }

fruits.forEach(
  function(value,key){
  console.log(key+" "+value);
}
  )

var array=['a','b','c'];
for (const value of array){
  console.log(value);
}

for(const x of fruits.keys()){
  
  console.log(x);
  
}

for(const x of fruits.values()){
  
  console.log(x);
  
}

//get function will give us either values of the key or key of the value based on our request
// console.log(fruits.get("apples"));

// //get the size of your elements
// console.log(fruits.size);//3

// //delete specific items from map

// console.log(fruits.delete("apples"));//true

// console.log(fruits.size);//2

// console.log(fruits.delete("apples"));//false

// //Delete all items
// fruits.clear();

// console.log(fruits.size);//0

//we can also check if an item exists in map or not

console.log(fruits.has("strawberry"));//false
console.log(fruits.has("apples"));//true
console.log(typeof fruits);//object