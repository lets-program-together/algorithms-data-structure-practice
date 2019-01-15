const bubbleSort = arr=> {
  if (arr.length <= 1) {
    return arr
  }
  
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = (i + 1);
      const first = arr[i];
      const second = arr[j];
      if (first > second) {
        [arr[i], arr[j]] = [second, first];
        swapped = true;
      }
    }
  }
  return arr
}