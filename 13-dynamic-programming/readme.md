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

### Sample Interview Questions:
#### [House Robber](https://leetcode.com/problems/house-robber/)
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

// the value we are memoizing is the last biggest value that is not adjacent to current value

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let maxValue = Math.max(nums[0] || 0, nums[1] || 0);
    let runnerUp = nums[0] || 0;
    let tmp;
    for (let i = 2; i< nums.length; i++) {
        tmp = maxValue
        maxValue = Math.max(maxValue, runnerUp + nums[i]);
        runnerUp = tmp;
    }
    return maxValue
};
```

#### [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

  * the number of ways one can climb stairs is equal to the sum of the number of ways one can climb the steps before N
  * since the solution to this problem is derived from the solution to its sub-problem, we can use dynamic programming to improve time-complexity to O(n) by making a space complexity trade-off of O(n)

```javascript
var climbStairs = function(n) {
    let cache = {};
    
    let howManyWays = function(n) {
        if (n in cache) {
            return cache[n];
        }

        if (n < 4) {
            cache[n] = n;
            return cache[n];
        }
        
        cache[n] = (howManyWays(n - 1) + howManyWays(n - 2));
        return cache[n];
    }
    
    return howManyWays(n);
};
```

*Iterative approach: O(n) time-complexity, O(n) space-complexity*
```javascript
var climbStairs = function(n) {
	let steps = [1 ,1];
	for (let i = 2; i < n + 1; i++) {
		steps.push(steps[i - 1] + steps[i -2]);
	}
	return steps[n];
}
```

*Solution without dynamic programming: O(n^2) time complexity, O(1) space:*

```javascript
    var climbStairs = function(n) {
        if (n < 4) return n;
        return (climbStairs(n - 1) + climbStairs(n -2));
    }
```

* [Best Time to Buy/Sell Stocks](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)


