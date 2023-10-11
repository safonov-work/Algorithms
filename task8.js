const maxProduct = (nums) => {
  let leftInt = 1
  let rightInt = 1
  let ans = nums[0]

  for (let i = 0; i < nums.length; i++) {
    leftInt = leftInt === 0 ? 1 : leftInt
    rightInt = rightInt === 0 ? 1 : rightInt

    leftInt *= nums[i]

    rightInt *= nums[nums.length - 1 - i]

    ans = Math.max(ans, Math.max(leftInt, rightInt))
  }

  return ans
}

console.log(maxProduct([2, 3, -2, 4]))

// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.
