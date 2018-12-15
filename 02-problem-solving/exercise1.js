// Given 2 arrays, create a function that let's a user know
// (true/false) whether these two arrays contain any common items.

// For example: 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ----------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true


// Input is two arrays, 
// output should be boolean (true/false) if there is overlap.

// Questions:
// Will the arrays contain only strings?
// Are these arrays sorted?
// - If the arrays are sorted, our best case senario would have O(1)
// - time complexity since I can just check to see if the last element
// - of the first array is greater than the first element of the second array.

// Brute Force Solution:
// - Loop through the list of elements in the first array.
// - For each iteration of that loop, we will loop through the second array
// - and compare the each element of the second array with each element of the
// - first array. 
// - Since input size of n, m are not fixed, this solution has quadratic time complexity
// - O(mn)

// Alternative Solution:
// - Loop though the first array and create a look-up table to keep track
// - of all the elements we encounter in this array.
// - Loop through the second array and check our loop up table to see if this
// - value has already been encountered. if yes, return true, if not continue.
// - If we looped through both arrays without returning true, then we can assume
// - that there isn't any overlaps and return false.
// - This solution has a linear time complexity of O(m + n).