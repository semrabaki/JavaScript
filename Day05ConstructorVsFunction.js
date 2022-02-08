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


   //normal function
   function carInfo(brand, model, year){
      
    return {
      brand, model, year
    };
    
    
    
  };
   const carFunction = carInfo('Nissan', 'Rogue', 2019);
  console.log(carFunction);

  
  //generate a new constructor having following items; name, age, hasLicense,language[]
  
  function Employee(name, age, hasLicense, languages){
    
    
       this.name=name;
       this.age=age;
       this.hasLicense=hasLicense;
       this.languages=languages;
    
  }

  const personJim= new Employee('Jim', 20, true,['English','Spanish','German']);

  console.log(personJim);

 //we can also get specific items from employee
  console.log(personJim.name);
   console.log(personJim.age);
   console.log(personJim.languages[1]);


   const personAsim= new Employee('Asim', 30, true,['English','German']);

  console.log(personAsim);
