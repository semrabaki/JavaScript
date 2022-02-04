//concole.clear();
//let dateOfYear= prompt("Please enter your date of year");
//console.log("Your age is " +(2022-dateOfYear)); // Your age is 37

let num1=13.22997293;
let ceilNum=Math.ceil(num1);

console.log(ceilNum); //14 - it rounds up

let floorNum=Math.floor(num1);
console.log(floorNum); //13 - it rounds down

let roundedNum=Math.round(num1);

console.log(roundedNum);  //14 because it rounds accorgin to math rules

console.log(Math.ceil(235.000000000001));//236
console.log(Math.ceil(235.00000000000001));//235

//toFixed is using Math.round logic and declared to how many digit to show
let fixedNum=num1.toFixed(3);//13.230
console.log(fixedNum);