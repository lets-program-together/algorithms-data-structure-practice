// Given a collection of number and a number representing the sum,
// return either true or false.

// [1,2,3,9] Sum = 8 -> false
// [1,2,4,4] Sum = 8 -> true

// Important points: we are looking for a pair of numbers that add up to the sum.
// 1. Are these arrays in Memory?
// 2. Can the elements be repeated? ie, can 4 combine with itself to make 8 instead of having another 4?
// 3. Are the elements in the Array sorted?
// 4. Are the elements integers or can they be floating ponts? Can the integers be negative?

// Brute force Solutions:
// - We can loop through the array; for each iteration of this loop,
// - We can loop through the array starting at +1 of the index in the outer loop iteration.
// - Compare the sum of element in the first loop with the element in the second loop 
//   with the given sum.
// - If the sum is equal to the given sum, then return true, otherwise continue.
// - When the loops complete, we can assume that no pair of elements actually
//   match the given sum and return false.
// - This solution will have O(1) space complexity but O(n^2)

// brute force: O(n^2)
function containsPairSum(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    // - alternatively, we can binary search for the first number's complement
    //   to achieve O(n log(n)) performance
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
// containsPairSum([1,2,3,9], 8)
// containsPairSum([1,2,4,4], 8)
// ---------------------------------------------------------------------

// if arrays are sorted we work inwards from the array's extremeties:
// O(n)
function containsPairSum2(arr, sum) {
  let last = arr.length - 1;
  let start = 0;

  while (last - start > 0) {
    let pairSum = arr[last] + arr[start];
    if (pairSum === sum) {
      return true;
    }
    if (pairSum > sum) {
      last -= 1;
    }
    if (pairSum < sum) {
      start += 1;
    }
  }
  return false
}
// console.log(containsPairSum2([1,2,3,9], 8))
// console.log(containsPairSum2([1,2,4,4], 8))
// ---------------------------------------------------------------------

// O(n) time complexity for unsorted array:
function containsPairSum3(arr, sum) {
  // loop through the array
  // check to see if the current number is a complement of a number we already encountered
  // (ie: do we have sum - currentNumber in lookup?)
  // if it is, then return true
  // else, add the currentNumber to our hash look up.
  // if we finish traversing without return true, then we can return false.
  const map = new Set([])

  for (let i = 0; i < arr.length; i++) {
    if (map.has(sum - arr[i])) {
      return true
    } else {
      map.add(arr[i])
    }
  }

  return false
}
// console.log(containsPairSum3([1, 2, 3, 9], 8))
// console.log(containsPairSum3([1, 2, 4, 4], 8))
// console.log(containsPairSum3([1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 9], 8))
