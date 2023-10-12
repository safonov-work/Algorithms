// solution 1;

const sortedSquares = (arr) => {
  return arr.map((item) => item ** 2).sort((a, b) => a - b)
}

// solution 2
const sortedSquares2 = (arr) => {
  let i = 0
  let k = arr.length - 1
  const res = []
  const reverseArr = []

  while (i <= k) {
    const left = Math.abs(arr[i])
    const right = Math.abs(arr[k])

    if (left < right) {
      res.push(Math.pow(right, 2))
      k--
    }
    if (left >= right) {
      res.push(Math.pow(left, 2))
      i++
    }
  }

  for (let i = res.length - 1; i >= 0; i--) {
    reverseArr.push(res[i])
  }

  return reverseArr
}

console.log(sortedSquares2([-7, -3, 2, 3, 11]))

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
