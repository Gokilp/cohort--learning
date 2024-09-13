/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
  let largeset = numbers[0];
  
  for(let i=1;i<numbers.length;i++)
  {
     if(numbers[i]>largeset)
        largeset = numbers[i];
  }
  return largeset;
}
let arr = [3,7,2,9,1];
findLargestElement(arr)
module.exports = findLargestElement;