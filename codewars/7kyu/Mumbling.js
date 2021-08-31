//This time no story, no theory. The examples below show you how to write function accum:

//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    // input: string
  // output: string
 
  //[x] look at the string
  //[x] capitalize first letter in word
  //[x] find index of letter in the string
  //[] multiply index amount in letter
 
  let lowcaseS = s.toLowerCase();
  //console.log(lowcaseS)
 
  let result = []
 
  for(var i = 0; i < lowcaseS.length; i++){
    let highCase = lowcaseS[i].toUpperCase();
    //console.log(highCase);
   
    for(var j = 0; j < i; j++){
      highCase += lowcaseS[i]
    }
    result.push(highCase);
  }
  return result.join("-")
}