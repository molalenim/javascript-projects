let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);


// let phrase = 'Code for fun'
// console.log(phrase[2]);

// let myStr = 'Index'

// console.log(myStr[2] === 'n');
// console.log(myStr[4] === 'x');
// console.log(myStr[6] === ' ');
// console.log(myStr[0] === 'I');

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

let cityName = "Vienna";
let stateName = "Virginia";
let location = cityName + ", " +  stateName;

console.log(location.length);

let pet = 'cat'
console.log(pet + 's');
pet += 's';
console.log(pet);

let word = 'JavaScript';
let result = word.slice(4).toUpperCase();
console.log(result);