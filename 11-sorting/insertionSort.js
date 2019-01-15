const insertionSort = arr => {
  // iterate through the array and 'insert' the current element to the correct index
  // have a nested iteration:
  // if current element is greater than previous element, skip to next iteration
  // if current element is smaller, swap with element

  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let currElement = arr[j + 1];
      let prevElement = arr[j];

      if (prevElement > currElement) {
        arr[j + 1] = prevElement;
        arr[j] = currElement;
      } else {
        break;
      }

    }
  }

  return arr
}