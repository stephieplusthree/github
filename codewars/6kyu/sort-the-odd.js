// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


////////////////ANSWER///////////////////
function sortArray(array) {
    //   Input: array of numbers
  //   Output: array of numebrs
  //   Algorithm:
  //   - [X] If empty array, return empty array.
  //   - [X] Look through the numbers and grab all the odd numbers.
  //   - [X] Sort the odd numbers in ascending order.
  //   - [X] Look the original numbers and replace the odd numbers.
    if (array.length === 0) return array;
    let odds = [];
    array.forEach((num) => { if (num % 2 >= 1) odds.push(num); })
  //   for (let i = 0; i < array.length; i++) {
  //     let curr = array[i];
  //     if (curr % 2 >= 1) odds.push(curr);
  //   }
    odds.sort((a, b) => a - b);
    array.forEach((num, i, arr) => {
      if (num % 2 >= 1) {
        let odd = odds.shift();
        arr[i] = odd;
      }
    })
  //   for (let j = 0; j < array.length; j++) {
  //     let curr = array[j];
  //     if (curr % 2 >= 1) {
  //       let odd = odds.shift();
  //       array[j] = odd;
  //     }
  //   }
    return array;
  }
  