var drinks = ['water', 'coke', 'fanta', 'tea'];
var snacks = ['sunchips', 'gold fish', 'nuts', 'popcorn']; 
//we check if we have an array as type or not

console.log(Array.isArray(drinks));//
console.log(Array.isArray('stirng'));//false

//we can also concatenate arrays with each other
const favFoods = drinks.concat(snacks);
console.log(favFoods);//["water", "coke", "fanta", "tea", "sunchips", "gold fish", "nuts", "popcorn"]

//we can use slice function to have partial data from an array
//we give starting index and ending index but the ending index ir exclusive
const myFoods=favFoods.slice(1,5);
console.log(myFoods);//["coke", "fanta", "tea", "sunchips"]
// we can get items starting from last index
const slicedDrinks=drinks.slice(-1);
console.log(slicedDrinks);//["tea"]

//if we use join method, we can have special chars in between items

const joinedItems=drinks.join('-');
console.log(joinedItems);//"water-coke-fanta-tea"

//we can also make a single item that joining all

const joinedItems2=drinks.join('');
console.log(joinedItems2);//"watercokefantatea"

const joinedItems3=drinks.join(',');
console.log(joinedItems3);//"water,coke,fanta,tea"


let firstArr = [1,2,3,4,5];//array  1 2 3 4 5
let secondArr = [1,2,3,4,5];//array 1 2 3 4 5
                        
//if we have == this checks if the values are the same or not
//if we have === this checks if the values and data types are the same or not

let isEqual = firstArr.toString() == secondArr.toString();//true
console.log(isEqual);
 

//Objects will have always different concepts which means if you only compare the values it will give  true but if you
//compare the objects (firstArr and secondArr) it will give you false because these arrays are difernet objects
//when we compare two object values we need to use toString methos which enables you to compare the values
let isEqual2 = firstArr == secondArr;//false
console.log(isEqual2);

console.clear();
//we can also reverse arrays
var nums = [5,3,7,3,-6,11];

//       console.log(`original numbers: ${nums}`);
//       nums.reverse();
//       console.log(`reversed numbers : ${nums}`);

//we can also sort numbers and by default, it will sort them in ascending order (from smaller to greater)

//we can use just sort() function to sort array elements
