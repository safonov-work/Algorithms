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
