// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// ANSWER

function mergeArrays(a, b) {
    
//   Input: two arrays
  //   Output: one array
  
  //   Algorithm:
  //   - [X] Grab the beginning item in the first array.
  //   - [X] Grab the beginning item in the second array.
  //   - [X] Alternate grabbing the beginning items from first then second array.
  //   - [X] Return the new array.
  
  let mergedArr = [];
  while (a.length || b.length) {
    if (a.length) mergedArr.push(a.shift());
    if (b.length) mergedArr.push(b.shift());
  }
  return mergedArr;
}
