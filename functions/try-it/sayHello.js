function sayHello() {
   console.log("Hello, World!!!!");
}
sayHello();

function hello(name = "World", lastName = "") {
   return `Hello, ${name}${lastName}!!`;
}

console.log(hello("Jim", "McKelvey"));
console.log(hello());

/////////////////////////////////////////////////////
function repeater(str) {
   let repeated = str + str;
   console.log(repeated); //////evern this log won't print ulness the function is called
}
///////// call the funcion and store it in a new variable
let result = repeater('Bob');

console.log(result);//////////the rerurn is undefined 