//You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

//For example:

//string -> 'yliausoenvjw'
//array -> ['anger', 'awe', 'joy', 'love', 'grief']
//output -> '3 feelings.' // 'awe', 'joy', 'love'


//string -> 'griefgriefgrief'
//array -> ['anger', 'awe', 'joy', 'love', 'grief']
//output -> '1 feeling.' // 'grief'


//string -> 'abcdkasdfvkadf'
//array -> ['desire', 'joy', 'shame', 'longing', 'fear']
//output -> '0 feelings.'
//If the feeling can be formed once - plus one to the answer.

//If the feeling can be formed several times from different letters - plus one to the answer.

//Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.


//ANSWER

function countFeelings(string, array) {
  
    //   Input: String of random lower-case letters, an array of strings.
    //   Output: String.
    
    //   Algorithm:
    //   - [X] Look through the feelings.
    //   - [X] Look at each letter in the feeling.
    //   - [X] Check if the letter is in the string.
    //   - [X] If all letters are found in the string keep a count.
    
    let count = array.length;
    
    for(let i = 0; i < array.length; i++) {
      const word = array[i].split('');
      
      for(let j = 0; j < word.length; j++) {
        const letter = word[j];
        
        if(!string.includes(letter)){
          count -= 1;
          break;
        };
      }
    }
    
    const answer = count === 1 ? `${count} feeling.` : `${count} feelings.`;
    
    return answer;
  }