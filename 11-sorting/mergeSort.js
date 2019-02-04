const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let output = []
  let l = 0;
  let r = 0;

  // place element from two array in order
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      output.push(left[l]);
      l++;
    } else {
      output.push(right[r]);
      r++;
    }
  }

  // place any items remaining in arrays (if any)
  while (l < left.length) {
    output.push(left[l]);
    l++;
  }

  while (r < right.length) {
    output.push(right[r]);
    r++;
  }
  return output;
}


const answer = mergeSort(numbers);
console.log(answer);