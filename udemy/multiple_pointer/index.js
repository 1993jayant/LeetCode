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

// function isSubSequence(str1, str2) {
//   // define pointer for first string
//   let ptr1 = 0;

//   // loop through the second string to check if the character from first string matches the second string
//   for(let i = 0; i < str2.length; i++) {
//     if(str1[ptr1] === str2[i]) {
//       ptr1++;
//     }

//     if(ptr1 > (str1.length - 1)) return true;
//   }

//   return false;
// }

// console.log(isSubSequence('abc', 'acb'));


// function findPair(arr, number) {
//     // Check if the array is empty, then return false
//     if(!arr.length) return false;
    
//     // Sort the array
//     arr.sort((a, b) => {
//         if(a - b < 0) {
//             return -1;
//         } else {
//             return 1;
//         }
//     })
    
//     // Initialize two pointers
//     let ptr1 = 0;
//     let ptr2 = 1;
    
//     // Loop through the array and check if the difference is equal to the given number
//     while((ptr1 < arr.length) && (ptr2 < arr.length)) {
//         let diff1 = arr[ptr2] - arr[ptr1];
//         let diff2 = -diff1;
        
//         // if the difference is greater than the number, then increase pointer 1, and vice versa
//         if((ptr1 !== ptr2) && ((diff1  === number) || (diff2  === number))) {
//             return true;
//         } else if(diff1 < number) {
//             ptr2++;
//         } else {
//             ptr1++;
//         }
//     }
    
//     return false;
// }

// console.log(findPair([6,1,4,10,2,4], 2));

function findPair(arr, val) {
  let obj = {};
  // create an object with each value of array as the key
  for(let value of arr) {
    // if val is zero, and object has the value already, then return true as two same values will have a difference of zero
    if(val === 0 && obj[value]) return true;

    obj[value] = 1;
  }

  //   if val is zero and no same values are encountered in the for loop above, then return false
  if(val === 0) return false;

  for(let i = 0; i < arr.length; i++) {
    // if first value is the current index value, then calculate the second number
    let secondNum = arr[i] - val;

    // check if second number is in the array
    if(obj[secondNum]) return true
  }

  return false;
}