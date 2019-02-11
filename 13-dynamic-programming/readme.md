### Dynamic Programming
*Oversimplification: Dynamic Program is basically combining divide and conquer with memoization.*

```javascript
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 1);
}
```
Although this recusive solution is elegant and readable, it is actually very inefficient as it takes n ^ 2 calculations to resolve.

Since this recursive solution is calculated using a subversion of itself (which can be *memoized*), it can be improved using dynamic programming.

We can reduce the time complexity of this solution to O(n) (although we will be making a memory trade off).

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

#### Sample Interview Questions:
* [House Robber](https://leetcode.com/problems/house-robber/)
* [Best Time to Buy/Sell Stocks](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
* [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
