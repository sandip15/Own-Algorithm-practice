// fibonacci number sequence : 0,1,1,2,3,5,8,13,21,34,55,89,144......
//find the fibonacci number of the given index(n)
// use both the iterative and recursive approach

function fibonacciIterative(n){
  //iterative solution
  let arr =[0,1];
  for (let i=2 ;i<=n; i++){
    arr.push(arr[i-2]+arr[i-1]);
  }
  result = 0;
  for (let i=1; i<n ;i++){
    result = (n-1) + (n-2)
  }
  return arr[n];
}
function fibonacciRecursion(n){
  //recursive  solution
  if (n<2){
    return n;
  }
  return fibonacciRecursion(n-1)+ fibonacciRecursion(n-2);
}

fibonacciIterative(6)
fibonacciRecursion(6)
