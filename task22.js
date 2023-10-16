const nums = [1, 2, 3, 4]

const productExceptSelf = (nums) => {
  const res = []

  for (let i = 0; i <= nums.length - 1; i++) {
    let product = 1
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue
      product *= nums[j]
    }
    res.push(product)
  }
  return res
}

console.log(productExceptSelf(nums))

//Учитывая целочисленный массив nums, верните массив answer , answer[i] равный произведению всех элементов nums кроме nums[i] .

//Произведение любого префикса или суффикса numsгарантированно вписывается в 32-битное целое число.

//Вы должны написать алгоритм, работающий за  O(n) время и не использующий операцию деления.

// solution 2;

var productExceptSelf2 = function (nums) {
  let n = nums.length
  let result = Array(n).fill(1)
  let productFromStart = 1
  let productFromEnd = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= productFromEnd
    productFromEnd *= nums[i]
  }

  for (let j = 0; j < nums.length; j++) {
    result[j] *= productFromStart
    productFromStart *= nums[j]
  }

  return result
}
