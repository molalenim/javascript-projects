let num = 1001;
let numDecimal = 123.45;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let numString = String(num);
console.log(numString.length);

/*
//this is another way I stubbled onto because on the IDE giving me hints
let numString = num.toString();
console.log(numString.length);
*/

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).


let numString2 = String(numDecimal);
console.log(numString2.length - 1);


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

// let lastindex = (numString2.length - 3); 
// console.log(numString2[lastindex]);

if (numString2.includes(".")) {
    String(numDecimal);
console.log(numString2.length - 1);

} else {
    (numString2.includes(".") === false) 
     console.log(numString2.length);
}


//This is how the book did it.
// if (String(num).includes('.')){
//     console.log(String(num).length-1);
//     } else {
//     console.log(String(num).length);
//     }



//Or I could code the else statement this way    
//  else{
//     (numString2.includes(!".")) 
//      console.log(numString2.length);
// }