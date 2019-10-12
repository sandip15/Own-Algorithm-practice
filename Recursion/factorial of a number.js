//implement factorial of a number by both recursive and iterative way
/*generally by recursive way the space complexity is bit high due to adding of multiple stacks 
(created by multiple function calls)on the top of other and not releasing those stacks, and vice versa */

function factorialIterative(number){
  //interative solution
  let answer = 1;
  for (let i=1; i<= number ; i++){
    answer *= i;
  }
  return answer;
}

function factorialRecursive(number){
  //recursive solution
  if (number === 1){
    return 1
  }
  return number* factorialRecursive (number-1)

}

factorialIterative(5);
factorialRecursive(5);
