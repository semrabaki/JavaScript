 //we will learn destructuring in Js

 var user = {
      
    firstName : 'Sam',
    lastName : 'Collin',
    isEmployed: true,
    isLocation: 'New Jersey'
  }
   //regular way of getting elements 
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.isEmployed);
    console.log(user.isLocation);
    
   //we are generating new naming convention for object variables and can use them
  var {firstName,lastName,isEmployed, isLocation} = user; // you need to use the same name convention with the object

  console.log(firstName);//Sam
  console.log(isLocation);//New Jersey

 isLocation='Virginia';
  console.log(isLocation);//Virginia


function getUser(){
  return{
    name2:'Sam',
    location2:'NYC',
    email:'sam@gmail.com'
  }
}

var{ name2, location2, email}=getUser();

console.log(name2);//Sam
console.log(location2);//NYC


var user2=['Tim','LA','tim@gmail.com'];
//Regular way
console.log(user2[0]);
console.log(user2[1]);
console.log(user2[2]);

var [userName,userLocation,userEmail]=user2;

console.log(userName);//Tim
console.log(userLocation);//LA
console.log(userEmail);//"tim@gmail.com"