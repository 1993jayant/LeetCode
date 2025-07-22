function constructNote(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  let counter1 = {};
  let counter2 = {};
  
  for(let i in str1) {
      counter1[str1[i]] = (counter1[str1[i]] || 0) + 1
  }
  console.log(counter1);
  
  for(let i in str2) {
      if(counter1[str2[i]] && (counter1[str2[i]] > 0)) {
          counter1[str2[i]] -= 1;
      }
  }

  for(let i in counter1) {
    if(counter1[i] > 0) return false;
  }

  console.log(counter2)
  
  return true;
}

// console.log(constructNote('aabbcc', 'bcabcaddff'));

function findAllDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  let freqCounter = {};
  
  for(let val of arr) {
      freqCounter[val] = (freqCounter[val] || 0) + 1;
  }
  
  let duplicateElements = [];
  
  for(let key in freqCounter) {
      if(freqCounter[key] === 2) {
          duplicateElements.push(parseInt(key))
      }
  }
  
  return duplicateElements;
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));

