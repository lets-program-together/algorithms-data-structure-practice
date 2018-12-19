

function mergeSortedArrays(arr1, arr2) {
  let [i, j] = [0, 0];
  let mergedArray = [];

  while (mergedArray.length < arr1.length + arr2.length) {
    if (arr1[i] <= arr2[j] || arr2[j] === undefined ) {
      mergedArray.push(arr1[i])
      i++
    } else if (arr2[j] <= arr1[i] || arr1[i] === undefined){
      mergedArray.push(arr2[j])
      j++
    }
  }
  return mergedArray
}

// sample solution

function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  if (array1.length < 1) {
    return array2
  }
  if (array2.length < 1) {
    return array1
  }

  while (array1[i] || array2[j] || array1[i] === 0 || array2[j] === 0) {
    if (array1[i] <= array2[j] || array2[j] === undefined) {
      mergedArray.push(array1[i]);
      i++;
    } else if (array2[j] <= array1[i] || array1[i] === undefined) {
      mergedArray.push(array2[j])
      j++;
    }
  }

  return mergedArray
}
