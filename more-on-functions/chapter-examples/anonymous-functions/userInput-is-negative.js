const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
//Complete the following code snippet so that it logs an error message if userInput is negative. -> logger
// Fill in the blank in line 10 (then uncomment it) so that it logs an error message if userInput is negative.
if (userInput < 0) {
  // ______("Invalid input");
   logger("Invalid input");

}

