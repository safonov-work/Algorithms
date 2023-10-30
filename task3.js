// solution 1;
const climbStairs = (n) => {
  return n <= 3 ? n : 2 * (climbStairs(n - 2) + climbStairs(n - 3))
}

console.log(climbStairs(5))

// аналогичная задача с числами фибонначи

const fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))

// solution 2;
