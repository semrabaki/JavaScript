function func(){
    var x=10;
  const num1=21;
 //num1=25;// when variable is const you cannot reassign new value
    var x=13;
   let xx=11;
   //let xx=22;//we can not redeclared Let variables
     if(true){
     var y=20;
     let yy=22;
     }
     console.log(x);
     console.log(num1);
    console.log(xx);
     console.log(y);
    // console.log(yy); we can not call Let variable outside the scope
 
 }
 func();