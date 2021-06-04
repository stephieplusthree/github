//Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

//Vowels are (in this kata): a, e, i, o, u

//Note: all provided input strings are lowercase.

//Examples
//"day"    ==>  "dya"
//"apple"  ==>  "pplae"

//ANSWER

function moveVowel(input) {

    // input: string
    // output: string
    
    // algo:
    // [] look at the string
    // [] pull out vowels
    // [] move vowels to end in the same order

    let consonants = "";
    let vowels = "";
    for(var i = 0; i < input.length; i++){
      if(/[aeiou]/.test(input[i])){
        vowels += input[i];
      } else {
        consonants += input[i];
      }
    }
    return(consonants.concat('', vowels));
  }

  // answer two
  function moveVowel(input) {
    let vowels =  input.split("").filter(x => x.match(/[aeiou]/gi)).join("")
    let nonVowls = input.split("").filter(x => x.match(/[^aeiou]/gi)).join("")
     return nonVowls + vowels
      
}

//g tells to find all matches, not just the first.

//i tells to be case insensitive.

//What goes inside the // is the pattern.

//[] tells to match any character in a set.

//aeiou are the characters in the set.

//[^aeiou] -> not a, e, i, or u