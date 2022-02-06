/*
FUNCTION INTRO
*/

//functions have return types as well as non return types

function greet(){
  
    console.log("Hi everyone");
    console.log("Wlcome to Javasctript");//"Wlcome to Javasctript"
    
  }
  
  greet();
  
  function greetPeople(person){
    console.log(`${person} is greeting you`)
  }
  
  greetPeople("Ibrahim"); //"Ibrahim is greeting you"
  
  greetPeople("5");//"5 is greeting you"
  greetPeople("true");//"true is greeting you"


  //when we use function, we can just gve the variable names and no need for data type
//for fucntion parameters, we can also use default value


function personInfo(firstName, lastName, location="VA", isWorking){
  
    console.log(`${firstName},${lastName},${location},${isWorking}`);
    
  }
  
  personInfo("Ibrahim", "Settar", "North Carolina", true);//"Ibrahim,Settar,North Carolina,true"
  
  personInfo("Ibrahim", "Settar");//"Ibrahim,Settar,VA,undefined"


  //Create an annonymus function with 3 parameters

var total=function(num1, num2, num3)
{
  console.log(num1+num2+num3);
}

total(3,4,5);


function sum(){
    let num1=5;
    let num2=4;
    let num3=3;
     
     return num1+num2+num3;
     
   }
   console.log(sum());
  console.log("==============================================");
   function square(v){
     return v*v;
   }
   console.log(square(5));//25
   
   //use 3 params, you need to add them with a function, but the default values should be 3,2,1
   
   function addNumbers(n1=3,n2=2,n3=1)
   {
     return n1+n2+n3; 
   }
   console.log(addNumbers(23,2,4));//29
   
   console.log(addNumbers());//6