//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(/* your code here */);


function findMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            //console.log(min);
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin(nums1));
console.log(findMin(nums2));
console.log(findMin(nums3));




/*
function findMinValue(numArr) {
 let minValue = undefined;
 for (let i = 0; i < numArr.length; i++) {
    if (minValue === undefined || minValue > numArr[i]) {
        //console.log(minValue);
        minValue = numArr[i];
    }     
 }  
 return minValue 
} */

/*
`1. Initially, minValue is undefined, and it gets set to the first element, which is 5.
2. When it compares minValue (currently 5) with the next element, which is 10, the condition minValue > numArr[i] is false because 5 is not greater than 10. So, minValue remains 5.
3. The loop continues, and when it encounters 2, the condition is true (minValue > numArr[i] because 5 > 2), so minValue gets updated to 2. When it encounters 42, the condition is false. So minValue remain 2.

In summary,The loop goes through every element in the array, but the if condition decides whether to update minValue based on whether the current element is smaller than the current minValue. So, if the condition is false for a particular element, it doesn't update minValue, and the loop proceeds to the next iteration.`
*/

/*
console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));
*/