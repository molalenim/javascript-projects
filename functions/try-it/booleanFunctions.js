function isEven(n) {
    return  n % 2 !== 0;      
    }

 console.log(isEven(4));
 console.log(isEven(7));
 
 // I like this simpler funchtion, it's easier to read like. All these three give the same result.
 //They all return the same booleans
////////////////////////////////////////////////////////////
  

 function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

//////////////////////////////////////////////////////////// no else
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(4));
console.log(isEven(7));


