 //implementation of bubble sort algorithm from scratch 
//afer every round one element gets sorted at its right place
 
function bubbleSort(arr){
  for (let i=0; i<arr.length-1; i++){
    for (let j=0; j<arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){
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
