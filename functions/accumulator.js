function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

//this outputs 10 
// four iterations starting from 0 to 3
// 2 + 2
// 4 + 2
// 6 + 2
// 8 + 2