
function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";     
    }
return line;
}
console.log(makeLine(5)); 


  function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        square += makeLine(size) + '\n';
    }
    return square;
  }
  
  console.log(makeSquare(5));


function makeRectangle(width, height, character) {
    let rectangle = "";
    let line = makeLine(width, character);
    
    for (let i = 0; i < height; i++) {
        rectangle += line + "\n";     
    }

    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3, "#"));

  
  function makeDownwardStairs(size){
    let triangle = "";
    for (let i = 0; i < size; i++) {
        triangle += makeLine(i+1) + '\n';
    }
    return triangle.slice(0,-1);
  }
  
  console.log(makeDownwardStairs(5));



  function makeSpaceLine(numSpaces, numChars) {


  }
  console.log(makeSpaceLine(3, 5));














/////////////////////////////////testing one two three////////////////////////////////////

///////////////////////////////////////// *
//display a single star

// console.log("* ");

///////////////////////////////////////// for loop of  * * * * *
//displayLine
// let size = 5;
// let row = "";

// for (let i = 0; i < size; i++){
//     row += "* ";
// }
// console.log(row);
///////////////////////////////////////// function of the same for loop

// function displayLine(size){
//     let row = "";
//     for (let i = 0; i < size; i++){
//         row += "* ";
//     }
//     console.log(row);
// }
// displayLine(5);

///////////////////////////////////Square just as a for loop

//displaySquare
// let size = 5;

// for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; j < size; j++) {
//         row += "* "; 
        
//     }
//     console.log(row); // This adds a new line after each row of asterisks
// }
///////////////////////////////////Same square in a function 

// function displaySquare(size){

// for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let j = 0; j < size; j++) {
//         row += "* "; 
        
//     }
//     console.log(row); // This adds a new line after each row of asterisks
// }

// }
// displaySquare(5);

////////////////////////////////triangle in just a for loop

//displaytriagle
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row += "* "; 
        
//     }
//     console.log(row); // This adds a new line after each row of asterisks
// }

///////////////////////////////same triangle, but in a function

// function displaytriagle(n){

//     for (let i = 0; i < n; i++) {
//         let row = "";
//         for (let j = 0; j <= i; j++) {
//             row += "* "; 
            
//         }
//         console.log(row); // This adds a new line after each row of asterisks
//     }

// }displaytriagle(5);







