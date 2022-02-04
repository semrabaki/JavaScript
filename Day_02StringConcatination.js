console.clear();
let fName="Orhan";
let lName='Tugra';
let age=12;
let bplace="Turkey";

console.log(fName+ ' ' +lName);

//My name is 'Tugra'

console.log("My name is" + ' '+ "'"+lName+"'");//"My name is 'Tugra'"

console.log("My name \'Tugra\'");//"My name 'Tugra'"


//First Name: Orhan, Last Name: Tugra, Age:12. Birth Place:Turkey
console.log("First Name:" + ' '+ fName+", Last Name: "+' '+ lName+", Age:" +age+", Birth Place: "+" "+bplace);//"First Name: Orhan, Last Name:  Tugra, Age:12, Birth Place:  Turkey"

let backthick= `First Name: ${fName}, Last Name: ${lName}, Age: ${age}, Birth Place : ${bplace}`;//"First Name: Orhan, Last Name:  Tugra, Age:12, Birth Place:  Turkey"

console.log(backthick);
