// //Create a 2 functions with 2 parameters and one has return type and one does not have return type
// //then print calues multiplying on the console

// let n1=2;
// let n2=3;

// let multipication= function(n1,n2){
//   return n1*n2;
// }
// console.log(multipication(n1,n2));

// let multipication2= function(n1,n2){
//   console.log(n1*n2);
// }
// multipication2(n1,n2);



// //create a nested object that will have car information
// //Also generate engine object as nested

// const car ={
      
//         make:'Honda',
//         model:'Accord',
//         year:2020,
//         engine:{
//           type:'Turbo W12 engine'
//         }
// }

// console.log(car);




// //Create a switch operator to see days of the week and print one the console

// let day= prompt('type a day');
// switch(day){
//   case 'monday':
//   console.log(day+ ' is a week day');
//   break;
//   case 'tuesday':
//   console.log(day+ ' is a week day');
//   break;
//   case 'wednesday':
//   console.log(day+ ' is a week day');
//   break;
//   case 'thursday':
//   console.log(day+ ' is a week day');
//   break;
//   case 'friday':
//   console.log(day+ ' is a week day');
//   break;
//   default:
//   console.log('No matching day');
//   break;
 
  
// }



//generate an array that has these values:student, teacher, and parent
//then look if you have staff, if not insert the staff at the begining


let arr=['student','teacher','parent'];
if(!arr.includes('staff')){
  arr.splice(0,0,'staff')
}
console.log(arr);//["staff", "student", "teacher", "parent"]