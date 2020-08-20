//Given a mathematical equation that has *,+,-,/, reverse it as follows:

//solve("100*b/y") = "y/b*100"
//solve("a+b-c/d*30") = "30*d/c-b+a"

// answer
function solve(eq){
    //   Input: String
    //   Output: String
    //   Algorithm:
    //   - [] Grab the last item and bring it to the front.
      let arr = eq.split('');

      let answer = [];

      let num = [];
      
      for(let i = 0; i < arr.length; i++) {
        let isNum = arr[i] >= '0' && arr[i] <= '9';
        
        if(isNum) {
          num.push(arr[i]);
        } else if(num.length) {
          answer.unshift(num.join(''));
          num = [];
          answer.unshift(arr[i]);
        } else {
        answer.unshift(arr[i]);
        }
      }

      if(num.length) answer.unshift(num.join(''));

      return answer.join('');
      
    }