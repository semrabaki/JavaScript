
console.clear();
class Car{
  
  constructor(make, year){
    
    this.make=make;
    this.year=year;
    
  }
  
  toString(){
    return "The make of the car " + this.make+" the year of the car: "+ this.year;
    
  }
  
  currentCarInfo(){
    if(this.year>2018){
      
      return "This car is really noce as it is preety new: " +this.make+this.year;
    }else{
      
      return "This car is ideal as it has good features " +this.make+this.year;
    }
      
  }
  
}


class Model  extends Car{
  
  constructor(make, year,model){
    super(make, year);
    this.model=model;
    
  }
  
  currentCarInfo(){
    if(this.year>2018){
      
      return "This car is really noce as it is preety new: " +this.make+this.year+ " "+this.model;
    }else{
      
      return "This car is ideal as it has good features " +this.make+this.year+ " "+this.model;
    }
      
  }
  
   toString(){
    return "The make of the car " + this.make+" the year of the car: "+ this.year+" the car model is: " +this.model;
    
  }
}

let car1= new Car('Honda', 2020);

let car2=new Model("Bugatti", 2020, "Chiron");

//console.log(car1);
//console.log(car1.toString());
//console.log(car1.currentCarInfo());

console.log(car2.toString());
console.log(car2.currentCarInfo());











