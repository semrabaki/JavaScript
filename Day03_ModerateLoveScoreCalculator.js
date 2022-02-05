/*
Get 2 names from user and store variables:name1, name2. Create a variable loveScore and store the random number.
loveScore should be a random whole number between 1-100(inclusive) percent. Calculate the chance of a successful relationship. The closer to 100% the stronger
Task 1: Print ‘name1 and name2 ’s love score is loveScore’
//Try using if and ternary
Task 2: Print ‘You love each other’ if loveScore is greater or equal to 80 %.
Print ‘Not a strong relationship’ otherwise
Task 3: Print ‘You love each other’ if loveScore is greater or equal to 80 %.
Print ‘Modorate relationship’ if loveScore is between is in between 50% and 80% Print ‘Not a strong relationship’ otherwise
*/

console.clear();
let name1 = prompt("Please enter your name");
let name2 = prompt("Please enter your Crush's name ")

var loveScore = Math.ceil(Math.random()*100);

//Task 1: Print ‘name1 and name2 ’s love score is loveScore’

console.log(`${name1} and ${name2} 's love score is ${loveScore}`);

// if(loveScore>=80){
//   console.log("You love each other")
// }else if(loveScore>=50 && loveScore <80){
  
//    console.log("Moderate relationship")
// }else{
//   console.log("Not a strong relationship")
// }

loveScore >79?console.log("You love each other"):loveScore>49?console.log("Moderate relationship"):console.log("Not a strong relationship");
