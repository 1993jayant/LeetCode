function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lower = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lower]) {
        lower = j
      }
    }
    if (i !== lower) {
      let temp = arr[lower]
      arr[lower] = arr[i]
      arr[i] = temp
    }
  }

  return arr
}

console.log(selectionSort([13, 22, 2, 1, 0, -5]))
