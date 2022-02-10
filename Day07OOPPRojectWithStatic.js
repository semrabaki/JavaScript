class Square {


    constructor(width){

        this.width = width;
        this.heigth = width;
    }


  area(){

        return this.width * this.heigth;
    }

    toString(){
        return`This is a square of ${this.width} and ${this.heigth}`;
    }
  
  static isValidDimentions(a,b){
    
    return a.width * a.heigth  === b.width * b.heigth;
  }


}

let square1 = new Square(5);
let square2 = new Square(5);
console.log(Square.isValidDimentions(square1, square2));//true

console.log(square1.area());//25
console.log(square1.toString());//"This is a square of 5 and 5"
console.log(square1.heigth);//5
//console.log(square1);



