//ask user to give 2 numbers, generte a function and assign them to avariable, then print on the console

let n1=parseInt(prompt(`type a number`));
let n2= parseInt(prompt(`type a number`));

let total=function(n1,n2){
  return n1+n2;
}

console.log(total(n1,n2));