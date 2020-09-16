//Given a sequence of numbers, find the largest pair sum in the sequence.

//For example

//[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
//Input sequence contains minimum two elements and every element is an integer.



// answer
function largestPairSum(numbers)

  // input: numbers
  // output: number

  // [x] sort numbers lowest to greatest value
  // [x] take last to numbers of sorted numbers
  // [x] add the two numbers
  // [x] return the sum of the two largest numbers

{
  return numbers.sort((a, b) => a - b).slice(-2).reduce((a,b)=>a+b, 0);
}