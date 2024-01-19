//JavaScript provides methods to convert any character into its ASCII code and back.

//The string method charCodeAt takes an index and returns the ASCII code of the character at that index.

let nonprofit = "LaunchCode";

console.log(nonprofit.charCodeAt(0));
console.log(nonprofit.charCodeAt(1));
console.log(nonprofit.charCodeAt(2));
console.log(nonprofit.charCodeAt(3));
console.log(nonprofit.charCodeAt(4));
console.log(nonprofit.charCodeAt(5));
console.log(nonprofit.charCodeAt(6));
console.log(nonprofit.charCodeAt(7));
console.log(nonprofit.charCodeAt(8));
console.log(nonprofit.charCodeAt(9));

//To convert an ASCII code to an actual character, use String.fromCharCode().
//I used shift return and tab to create new lines to better readability

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]) 
                + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3]) 
                + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5]) 
                + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7]) 
                + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);

console.log("The interrobang character, \u203d, combines ? and !");

console.log('Launch\nCode');
console.log('Launch/nCode');
console.log('Launch', 'Code');
console.log('Launch\tCode');
console.log('Launch/tCode');
console.log('Launch/tCode');

