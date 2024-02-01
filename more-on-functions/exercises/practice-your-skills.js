//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
const anonFunction = function (arg){
    if (typeof arg === "number"){
    return arg * 3;
    }else if (typeof arg === "string") {
        return "ARRR!";
    }else {
        return arg;   
    }
}; 

console.log(anonFunction(3)); // logs 9
console.log(anonFunction("3")); //logs ARRR!

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

arr = arr.map(function(element){
    return anonFunction(element); 
});

console.log(arr);
