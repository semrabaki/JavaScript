console.clear();

let varName="javascript";

console.log(varName.slice(3)); //"ascript"

console.log(varName.slice(3,7));//"ascr"    last index exclusive

console.log(varName.substring(3,7)); //"ascr"

console.log(varName.slice(7,1));//""  if starting index is bigger than stopping index it returns empty string

console.log(varName.substring(7,1)); //"avascr" if starting index is bigger than stopping it changes the parameter

console.log(varName.substr(7,1));//"i"  begining index and how many characters will be getted


console.log(varName.substr(7,3));//"ipt"

//Ask user to enter a name : and print "Hello, Name"
//Only initial will be upper and the rest lower

let userName= prompt("Please enter your name");

let initialChar=userName.slice(0,1).toUpperCase();

let remainingChars= userName.slice(1).toLowerCase();

console.log(`Hello ${initialChar}${remainingChars}`);