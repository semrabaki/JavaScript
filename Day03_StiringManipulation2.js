console.clear();
let fName="Tugra";
let lName="Orhan";
console.log(fName+' '+lName);//"Tugra Orhan"
console.log(`${fName} ${lName}`);//"Tugra Orhan"

console.log(fName.concat(lName));//"TugraOrhan"

let sentences=" Today`s weather is good";

//trim()- it is removing space from begining and ending

let trimmed=sentences.trim();//"Today`s weather is good"

console.log(trimmed);

//CharAt()--index of character- you can get soecific index of character

let character= sentences.charAt(9);//w

console.log(character);

//split()-return an array splitting specific value(like ' ' and " ")
let sentence= " Today's weather is good "
let splitted = sentence.split(" ");
console.log(splitted); //["", "Today's", "weather", "is", "good", ""]