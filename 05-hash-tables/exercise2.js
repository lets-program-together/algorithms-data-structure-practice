// Given an array = [2, 5, 5, 2, 3, 5, 1, 2, 4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// the key values that I need to keep track of for the brute force method are:
//  - the characters that reoccured.
//  - how far the recurring characters are from subzero.
//  - how far the recurring characters are from each other.

function firstRecurringChar(arr) {
  let recurringChar = '';
  let combinedIndex = arr.length * 2;
  let distance = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    const currentChar = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const comparedChar = arr[j];
      if (currentChar === comparedChar && (i + j) <= combinedIndex) {
        if (j - i < distance) {
          recurringChar = currentChar;
          combinedIndex = (i + j);
          distance = (j - i);
        }
      }
    }

  }
  return recurringChar;
}

function firstRecurringChar2(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return arr[i];
    }
    map[arr[i]] = true
  }
}