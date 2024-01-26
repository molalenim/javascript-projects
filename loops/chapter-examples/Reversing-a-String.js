let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    // reversed = reversed + str[i]; the order of the concatination is what reverses.
    reversed = str[i] + reversed;
}
 
console.log(reversed);

