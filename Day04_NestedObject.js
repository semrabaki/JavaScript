//Nested Objects in
const personInfo={ //since I used const as a data type it will appliye every itemin the object 
    fName:'Jim',
    lName:'Carrey',
    age:45,
    address:{
              street:'5th Avenue',
              city:'NYC',
              state:'NY'
  },
     hobbies:['soccer','fishing','hunting'],
     salary:function(){
       return'100K yearly';
     }     
  }
  //console.log(personInfo);
  
  console.log(personInfo.address.street);//
  "5th Avenue"
  
  personInfo.address.street='10th street new update';
  console.log(personInfo.address.street);//"10th street new update"
  //We can change the value of the items but we can not assign new object to person infor object
 
  console.log(personInfo.hobbies[0]);//soccer
  console.log(personInfo.hobbies[1]);//fishing
  console.log(personInfo.hobbies[2]);//hunting