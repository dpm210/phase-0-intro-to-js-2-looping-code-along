// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
function writeCards(names) {
    let newNames = [];
    for (let i = 0; i < names.length; i++)[
    newNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    ]
    return newNames;
}
function countDown(number){
     while (number >= 0) {
        console.log(number);
        number--;
      } 
}
countDown(4);