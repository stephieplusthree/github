// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    //input: number
    //output: altered number
    //algo
    // [x] look at the num
    // [x] change num to string
    // [x] individualize each num(string)
    // [x] convert string to num
    // [x] multiply each number by itself
    // [x] put numbers back together
    // [] return the altered number
    const digits = num.toString().split('')
    const numString = digits.map(num => num * num).join('')
    return Number(numString);
  }
    
  