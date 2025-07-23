// function averagePair(arr, targetAverage) {
//   if(!arr.length) return false;

//   // initialize two pointer, one for the start of the array and one for the end
//   let ptr1 = 0;
//   let ptr2 = arr.length - 1;

//   // loop through the array and take average of pointer index values and increment or decrement the pointer indexes based on the target average value
//   for(let i = 0; i < (arr.length - 1); i++) {
//     let average = (arr[ptr1] + arr[ptr2])/2;

//     // compare with the target average
//     if(average > targetAverage) {
//       ptr2--;
//     } else if(average < targetAverage) {
//       ptr1++;
//     } else {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(averagePair([],4));

function isSubSequence(str1, str2) {
  // define pointer for first string
  let ptr1 = 0;

  // loop through the second string to check if the character from first string matches the second string
  for(let i = 0; i < str2.length; i++) {
    if(str1[ptr1] === str2[i]) {
      ptr1++;
    }

    if(ptr1 > (str1.length - 1)) return true;
  }

  return false;
}

console.log(isSubSequence('abc', 'acb'));