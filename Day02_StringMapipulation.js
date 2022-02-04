console.clear();
//Write small program to show remaining character in message. Limit for 280 character.

let myMessage= prompt("Please write your message");

let messageLength= myMessage.length;

const maxLength=280;

let messageOnScreen=`Sent: ${messageLength}. Remaning characters : ${maxLength-messageLength}`;

console.log(messageOnScreen);
