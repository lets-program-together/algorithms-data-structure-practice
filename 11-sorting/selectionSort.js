const selectionSort = arr => {
  // iterate through the array keeping track of the current index
    // have a nested iteration that looks for the smallest value
    // swap the smallest value index with the current index
  if (arr.length <= 1) {
    return arr
  }
  
  for (let currentIdx = 0; currentIdx < arr.length - 1; currentIdx++) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < arr.length; i++) {
      if (arr[i] < arr[smallestIdx]) {
        smallestIdx = i;
      }
    }

    let tmp = arr[currentIdx];
    arr[currentIdx] = arr[smallestIdx];
    arr[smallestIdx] = tmp;
    
  }

  return arr
}