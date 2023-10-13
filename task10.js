let nums = [4, 5, 6, 7, 0, 1, 2]
let target = 5

// solution 1;
const search = (nums, target) => {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i)
    }
  }

  return result.length === 0 ? -1 : result[0]
}

console.log(search(nums, target))

// solution 2;

const search2 = (nums, target) =>
  nums.includes(target) ? nums.indexOf(target) : -1

console.log(search2(nums, target))

// solution 3

const search3 = (nums, target) => {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) return mid

    if (nums[mid] < nums[right]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid
      }
    } else {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
  }
  return left
}

console.log(search3(nums, target))

// Существует целочисленный массив nums, отсортированный по возрастанию (с разными значениями).

// Перед передачей в вашу функцию numsон , возможно, поворачивается по неизвестному сводному индексу k( 1 <= k < nums.length), так что результирующий массив имеет [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]( индекс 0 ). Например, [0,1,2,4,5,6,7]его можно повернуть по сводному индексу 3и превратить в [4,5,6,7,0,1,2].

// Учитывая массив nums после возможного поворота и целое число target, верните индекс того , targetнаходится ли он в numsили -1нетnums .

// Вы должны написать алгоритм со O(log n)сложностью выполнения.
