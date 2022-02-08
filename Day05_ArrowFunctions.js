console.clear();
//Arrow Functions

function sum(num){
  
  return num+100;
  
}

console.log(sum(4));

//ARROW FUNCTION=>Case 1" one argument
//remove funtion keyword(fucntion)with name(sum)
//1 way Then put and arrow in between params and body

var arrow=(num)=>{
  return num+100;
}

console.log(arrow(11));

//2nd way
//Delete function and name, also delete the{} and delete also
//return keyword
var arrow2= (num)=>num+100;
  
  console.log(arrow2(12));


//3rd way
//Delete function and name, also delete the { } and delete also return keyword also you can
//remove params ( )
var arrow3=num=> num+100;
  


 console.log(arrow3(13));

//ARROW FUNCTION=> case 1: with more than one argument

function sum2(n1,n2){
  return n1+n2+100;
}

console.log(sum2(2,3));

//1.wayremove funtion keyword(fucntion)with name(sum)
//Then put and arrow in between params and body


var arrow4= (n1,n2)=>{
  return n1+n2+100;
}

console.log(arrow4(2,6));


//2nd way
//Delete function and name, also delete the{} and delete also
//return keyword


var arrow5= (n1,n2)=>n1+n2+100;


console.log(arrow5(2,3));
