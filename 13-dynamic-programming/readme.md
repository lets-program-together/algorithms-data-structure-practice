### Dynamic Programming
*Is an optimization technique - Do you have something to _cache_?*
* Memoization - storing the solution to a resource intensive problem so that we can save time the next time this function is called.

```javascript
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 1);
}
```
Although this recusive solution is elegant and readable, it is actually very inefficient as it takes n ^ 2 calculations to resolve. Using dynamic programming *(with memoization)*, we can reduce the time complexity of this solution to O(n) (although we will be making a memory trade off).

```javascript
function fibonacciMemoized(n) {
  let cache = {}
  if(n in cache) {
    return cache[n];
  } else {
    return function fibonacci(n) {
      if (n < 2) {
        return n;
      }

      cache[n] = fibonacci(n - 1) + fibonacci(n - 1);
      return cache[n];
    }
  }
}
```
"In computing, _memoization_ is an optimization technique used to primarily to speed up computer programs by remembering the output of an expensive function call and return the cached result when the same input occurs again for that function..." - [Wikipedia](https://en.wikipedia.org/wiki/Memoization)

