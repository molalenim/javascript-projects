
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

console.log(makeRectangle(5, 3));

  
  function makeDownwardStairs(size){
    let triangle = "";
    for (let i = 0; i < size; i++) {
        triangle += makeLine(i+1) + '\n';
    }
    return triangle.slice(0,-1);
  }
  
  console.log(makeDownwardStairs(5));



  function makeSpaceLine(numSpaces, numChars) {
    let line = "";
    let spaces = "";
   
    for (let j = 0; j < numSpaces; j++) {
      spaces += " "; // I used $ to tell if I indeed have spaces
      
    }
    let chars = makeLine(numChars);
    line = spaces + chars + spaces;  
    return line;
  }
  console.log(makeSpaceLine(3, 5));


  function makeIsoscelesTriangle(height){
    let triangle = "";
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + "\n");
      
    }
    return triangle.slice(0, -1); 
  }

  console.log(makeIsoscelesTriangle(5));


function makeDiamond(height){

  let triangleUp = makeIsoscelesTriangle(height);
  //console.log(triangleUp);

   let triangleDown = triangleUp.slice(1).split("").reverse().join("");
  //console.log(triangleDown);

  // let diamond = triangleUp.concat(triangleDown);
  // console.log(diamond);
  let diamond = triangleUp + "\n" + triangleDown;

return diamond;
}

console.log(makeDiamond(5));













/////////////////////////////////testing one two three Ground////////////////////////////////////

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







