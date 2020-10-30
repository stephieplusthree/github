// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// ANSWER

function getMiddle(s) {
  //input: string
  //output: string
  //algo
  //[x] look at the string
  //[x] check to see if the string is odd
  //[x] if string is odd return the middle character
  //[x] check to see if string is even
  //[x] if string is even return the middle 2 characters
  if (s.length % 2 == 0) {
    var position = s.length / 2 - 1;
    return s.substring(position, position + 2);
  } else {
    var position = Math.floor(s.length / 2);
    return s.substring(position, position + 1);
  }
}
