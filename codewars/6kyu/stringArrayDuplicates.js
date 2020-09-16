//In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

//For example:

//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//dup(["kelless","keenness"]) = ["keles","kenes"].

//Strings will be lowercase only, no spaces. See test cases for more examples.

//Good luck!

//ANSWER

function dup(s) {
    //input: array of string
    //output: array of string

    // algo
    // [x]look at array of string
    // [x]look at each letter in the string
    // [x]check to see if the next letter is the same
    // [x]if it is remove letter
    // return modified string

    var arrayPlaceholder = [];

    for(var i = 0; i < s.length; i++){

      var stringPlaceholder = '';
      const string = s[i]

      for (var j = 0; j < string.length; j++){

        const letter = string[j]
        const nextLetter = string[j+1]
        const duplicate = letter === nextLetter;
        
        if(!duplicate) {
          stringPlaceholder += letter;
        }
      }
      arrayPlaceholder.push(stringPlaceholder);
    }
    return arrayPlaceholder;
  };