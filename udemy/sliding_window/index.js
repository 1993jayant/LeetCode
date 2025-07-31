// function maxSubarraySum(arr, window_size) {
//   if(arr.length < window_size) return null;

//   // create two pointers according to the window size starting from zero
//   let ptr1 = 0;
//   let ptr2 = window_size - 1;
//   let maxSum = 0;
//   // loop through the array to find the subarray with maximum sum
//   while(ptr2 < arr.length) {
//     let sum = 0;

//     // loop through the subarray from ptr1 to ptr2 index values
//     for(let i = ptr1; i <= ptr2; i++) {
//       sum += arr[i];
//     }

//     // check if sum is larger than the earlier one
//     if(sum > maxSum) {
//       maxSum = sum;
//     }

//     ptr1++;
//     ptr2++;
//   }

//   return maxSum;
// }

function maxSubarraySum(arr, window_size) {
  if(arr.length < window_size) return null;

  let maxSum = 0;
  // take the sum of first window_size numbers of the array to calculate the initial sum
  for(let i = 0; i < window_size; i++) {
    maxSum += arr[i];
  }

  // now, loop through the rest of the array from window_size until the last element of the array 
  // and calculate the new sum by adding the newest index value and subtracting the beginning index value as the window is moving
  let tempSum = maxSum;
  for(let i = window_size; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - window_size];
    
    if(tempSum > maxSum) {
      maxSum = tempSum
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));