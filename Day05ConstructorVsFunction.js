function sum(make, model, year){ //function names should be lower case
  
  
    return make+' '+model+' '+year;
  }
  
  
  //a constructor with params
  function Car(make,model,year){ //the contructor name should be capital
    
    this.make=make;
    this.model=model;
    this.year=year;
  }
  
  
  var car1= new Car("Tesla","model3",2019);
   console.log(car1);    //[object Object] {
    //                     make: "Tesla",
  //                     model: "model3",
  //                     year: 2019
  //                     }
  
  console.log(sum("Honda","Accord",2016));//"Honda Accord 2016"