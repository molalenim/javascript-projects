function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}
 //Convert the following named function to an anonymous function that is stored in a variable.
let unNamedFunc = function(str){
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
};
console.log(reverse("LaunchCode"));







