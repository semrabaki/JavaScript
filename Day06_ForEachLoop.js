// console.clear();
// var array=['a','b','c'];

// //1.way
// array.forEach(

// function(element){
//   console.log(element);
// }
// )

// //2.way

// array.forEach(
// (element)=>{
//   console.log(element);
// }
// )

// //3. way

// array.forEach(
//   element =>{ console.log(element);}
// )

// //4 .way

// array.forEach(
//   element =>console.log(element)
// )


todos=[
    {
      id:1,
      text:'Wash the dishes',
      isCompleted: true
    },
    {
      id:2,
      text:'doctor appointment',
      isCompleted:true
    }
    
  ]
  
  
  todos.forEach(
  
  function(todo){
    //console.log(todo);
    console.log(todo.id);
  }
  
  )
  

  