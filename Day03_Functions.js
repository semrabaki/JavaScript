console.clear();
function great(){
    console.log("HEllo");
}

great();

function greetPerson(name){
  console.log("HEllo "+ name);
}

greetPerson("SEmra");

function personInfo(fName,lName, age,location, job){
  
  console.log(`${fName}, ${lName}, ${age}, ${location},${job}`);
  
}

personInfo('Tugra', 'Orhan',12,'france','student');//"Tugra, Orhan, 12, france,student"

personInfo(13212, 'kerim','five',93993,930);//"13212, kerim, five, 93993,930"
personInfo('Fatih')//"Fatih, undefined, undefined, undefined,undefined"
