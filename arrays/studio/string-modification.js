const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let result = str.slice(3) + str.slice(0,3);
console.log(result);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let quantity = input.question("Enter number of letters to move: ");
result = str.slice(quantity) + str.slice(0,quantity);
console.log(`Resposen ${result}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (quantity < 0) {
    console.log(`your input is less than the string lenght ${result}`);
} else if (quantity > str.length) {
    console.log(`Here you go ${result} `);
}
console.log();