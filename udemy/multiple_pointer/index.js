function averagePair(arr, targetAverage) {
  if(!arr.length) return false;

  // initialize two pointer, one for the start of the array and one for the end
  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  // loop through the array and take average of pointer index values and increment or decrement the pointer indexes based on the target average value
  for(let i = 0; i < (arr.length - 1); i++) {
    let average = (arr[ptr1] + arr[ptr2])/2;

    // compare with the target average
    if(average > targetAverage) {
      ptr2--;
    } else if(average < targetAverage) {
      ptr1++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(averagePair([],4));