function fibonacciIterative(n) {
  if (n < 1) {
    return null;
  } else if (n <= 3) {
    return Math.floor(n / 2)
  }

  let minus1 = 1;
  let minus2 = 1
  let fib = 0;

  for (let i = 0; i < n - 3; i++) {
    fib = minus1 + minus2;
    minus2 = minus1;
    minus1 = fib;
  }

  return fib
}

function fibonacciRecursive(n) {
  if (n == 0) {
    return n
  }

  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}