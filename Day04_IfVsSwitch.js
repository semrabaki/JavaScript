console.clear();
// let s2 = true;
// let s3 = true;
// console.log(s2 && true); //true
// console.log(s2 && s3);  // true
// console.log(s2 && s3 && false); // false
// s3 = false;
// console.log(s2 || s3 || false);//true
// s3 = null; 
// console.log( s2 && s3); //null -- true&&null--null
// console.log(s2 || s3); // true--true||null--true
// console.log(!s2); //false
// console.log(!s3); //true//!null--true

// console.log(!s3);//true

// console.log(`compare: ${s2 && null}`); //"compare: null"

//2.way
let day = prompt("Enter a day")
let day1 = day.toLowerCase()
let msg =(day1 == 'monday'||day1 =='tuesday'||day1 =='wednesday'|| day1 ==
  'thursday' || day1 == 'friday')?"weekday":day1 == 'saturday'||day1 =='sunday'?"weekend day":"enter day correctly"
console.log(msg)
