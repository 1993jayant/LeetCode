function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let swap = false
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        swap = true
      }
    }

    // if there is no swap in the last iteration, it means that the array elements are sorted, and there is no need to iterate further
    if (!swap) {
      break
    }
  }

  return arr
}

console.log(bubbleSort([9, 1, 2, 3, 4, 5]))
