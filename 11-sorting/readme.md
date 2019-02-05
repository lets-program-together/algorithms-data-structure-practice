## Algorithms: Sorting
Sorting algorithms can be divided into *stable* versus *unstable* algorithms. Stable means two elements with equal keys will appear in the same order in the sorted output as they appear in the input.
[More Info](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)

### Bubble Sort
| Best (Ω) | Average (Θ) | Worst (O) | Space |
|----------|-------------|-----------|-------|
|   Ω(n)   |   Θ(n^2)    |   O(n^2)  |  O(1) |
* Until the list is sorted,
* Iterate through the collection using two indexes.
* If element at first index is greater than second, swap.
* If we complete the iteration without swapping, assume collection is sorted.

### Insertion Sort
| Best (Ω) | Average (Θ) | Worst (O) | Space |
|----------|-------------|-----------|-------|
|   Ω(n)   |   Θ(n^2)    |   O(n^2)  |  O(1) |
Insertion Sort is really fast for collections that are almost sorted already and or collections with very few elements.
* Iterate through the collection.
* For each iteration at index i:
  * from index of *(i - 1)* to 0 (or visa versa):
    * insert the element at index i to the correct index (as determined by the sorting criteria)
* [More Info](https://www.geeksforgeeks.org/insertion-sort/)

### Selection Sort
| Best (Ω) | Average (Θ) | Worst (O) | Space |
|----------|-------------|-----------|-------|
|   Ω(n^2) |   Θ(n^2)    |   O(n^2)  |  O(1) |
* Iterate through the collection.
* For each iteration at index i:
  * from index of *(i + 1)* to last index:
    * find the smallest element.
  * swap the smallest element with element at index i.

### Merge Sort
| Best (Ω)      | Average (Θ)      | Worst (O)      | Space |
|---------------|------------------|----------------|-------|
|   Ω(n log(n)) |   Θ(n log(n))    |   O(n log(n))  |  O(n) |
Great if in-memory consumption is not a factor.
* Divide the collection into halves until no longer divisble.
* Merge the halves in sorted orded until all elements are sorted.
* For the merging process, compare each element in the the arrays:
  * move the indexes as you compare and collect the elements.
  * collect any remaining elements from the arrays (if there are any)

### Quick Sort
| Best (Ω)      | Average (Θ)      | Worst (O)      | Space     |
|---------------|------------------|----------------|-----------|
|   Ω(n log(n)) |   Θ(n log(n))    |   O(n^2)       |  O(log n) |

Uses less space than merge sort but can potentially degenerate to n^2 time complexity. Collection can be sorted in place (without using additional data structures). Quick sort is great for general use cases because if you're careful in choosing the pivot, worse case senario is not likely.
* Chose a random element as the pivot
* iterate through the collection:
  * elements that are smaller than the pivot should go on the left side of the pivot.
  * elements that are greater than the pivot should go on the riht side of the pivot.
  * keep track of the index by which we will partition the colletion.
* divide and conquer, run quickSort on elements left of the partition as well as elements on the right of the partition.
* base case: only execute quickSort logic if starting index is less than ending index.

### Heap Sort
| Best (Ω)      |   Average (Θ)    |   Worst (O)    |   Space   |
|---------------|------------------|----------------|-----------|
|   Ω(n log(n)) |   Θ(n log(n))    |   O(n log(n))  |    O(1)   |
*Heap Sort can be done by first heapifying the collection. (Because there is a mathematical relationship between the parent and children, we can do this in place without creating additional data structure).
We can then remove the elements one by one from the heap which will give us a sorted collection.*