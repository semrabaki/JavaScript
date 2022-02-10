console.clear();
//Rectangle ==> width, height

class Rectangle{
constructor(width,height)
{
  this.width=width;
  this.height=height;
}

getArea(){
  return this.width*this.height;
}

toString(){
  return`this is the width : ${this.width} and this is the height : ${this.height}`;
}
}

let rec1=new Rectangle (4,5);
let rec2=new Rectangle (10,8);

console.log(rec1.getArea());
console.log(rec2.toString());