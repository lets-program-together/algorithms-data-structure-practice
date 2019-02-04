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
* Divide the collection into halves until no longer divisble.
* Compare and sort the elements of the halves until array is sorted.