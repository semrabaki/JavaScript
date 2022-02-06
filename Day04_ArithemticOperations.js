//ask user to provide 2 numbers and get tehir addtion, subtraction, division and multipcat

let x=parseInt( prompt("enter numer"));

console.log(x);

let y=parseInt (prompt("enter numer"));

console.log(y);


function add(x,y){
  console.log(x+y);
}


function subtr(x,y){
  console.log(x-y);
}

              
function divide(x,y){
  console.log(x/y);
}



function multiply(x,y){
  console.log(x*y);
}

add(x,y);
subtr(x,y);
multiply(x,y);
divide(x,y);