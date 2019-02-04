const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let partitionIdx = left;
  if (left < right) {
    // use middle as pivot and swap with right
    let pivotIdx = Math.floor((right + left) / 2);
    let pivotVal = array[pivotIdx];
    array[pivotIdx] = array[right];
    array[right] = pivotVal;

    // move values lower than pivot to one side
    // move values higher than pivot to other side
    for (let i = left; i < right; i++) {
      if (array[i] < pivotVal) {
        let tmp = array[partitionIdx];
        array[partitionIdx] = array[i];
        array[i] = tmp;
        partitionIdx++;
      }
    }

    // swap pivot back to original spot
    pivotVal = array[partitionIdx];
    array[partitionIdx] = array[right];
    array[right] = pivotVal

    // divide and conquer array on a smaller scope
    quickSort(array, left, partitionIdx - 1)
    quickSort(array, partitionIdx + 1, right)
  }

  return array

}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);