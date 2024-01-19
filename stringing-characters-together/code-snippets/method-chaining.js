//String methods can be combined in a process called method chaining.
/*
let word = 'JavaScript';

console.log(word.toUpperCase());
// //Returns ``JAVASCRIPT``

// //What does ``word.slice(4).toUpperCase()`` return?
let result = word.slice(4).toUpperCase();
console.log(result);
*/
//Returns ``SCRIPT``

//Experiment with other combinations (chains) of string methods.


// let language = "JavaScript";
// let ans1 = language.replace('J', 'Q');
// let ans2 = language.slice(1,6);
// console.log(language);
// console.log(ans1);
// console.log(ans2);

// let language = "JavaScript";
// let ans1 = language.indexOf('S');
// let ans2 = language.slice(0,5);
// console.log(language);
// console.log(ans1);
// console.log(ans2);

// let language = "    JavaScript     ";
// let ans1 = language.trim();
// let ans2 = language.slice(0,5);
// console.log(language);
// console.log(ans1);
// console.log(ans2);

``//This removes leading and trailing white spaces, but not the spaces separating the words.``
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);