//The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

//Examples (in JavaScript):

//hamming("I like turtles","I like turkeys")  //returns 3
//hamming("Hello World","Hello World")  //returns 0
//You can assume that the two input strings are of equal length.


// Answer    
function hamming(a,b) {
	// input: two simular strings
  // output: number
  
  // algo:
  // [x] start looking at the two strings
  // [x] compair the letters
  // [x] if the letters are not equal start a count
  // [x] return count
  
  let aArr = a.split('');
  //console.log(aArr);
  
  let bArr = b.split('');
  //console.log(bArr);
  
  let count = 0;
  
  for(var i = 0; i < aArr.length; i++){
    if(aArr[i] !== bArr[i]){
      count += 1;
    }
  }
  return count;
}