 // Question: Implementation of the bubble sort algorithm from scratch , here after completing every round one element gets sorted at its right place
// usually the running time of bubble sort is very slow comparing with other sorting algorithm ,time complexity 0(n^2) and space complexity is 0(1)

function bubbleSort(arr){  // takes an array as an input
  for (let i=0; i<arr.length-1; i++){
    for (let j=0; j<arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){. // when the j+1 element of the array is larger than the previous one , we call the function swap to swap their values
        swap(arr,j,j+1)
      }
    }
  }
  return arr;
}

function swap(arr,n,m){
  if (arr[n]>arr[m]){
    let temp = arr[n];
    arr[n] = arr[m];
    arr[m] = temp;
  }
  return arr;
}

bubbleSort([2,5,13,1,4,16,5,23,3]);
