function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = i

    for (let j = i - 1; j >= 0; j--) {
      if (arr[currentElement] < arr[j]) {
        let temp = arr[j]
        arr[j] = arr[currentElement]
        arr[currentElement] = temp
        currentElement = j
      } else {
        break
      }
    }
  }
  return arr
}

console.log(insertionSort([1, 2, 5, 3]))
