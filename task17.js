const nums = [1, -1, -1, 0]

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    let sum = 0

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (nums[left + 1] === nums[left]) left++
        while (nums[right - 1] === nums[right]) right--
        left++
        right--
      } else if (sum < 0) left++
      else right--
    }
    while (nums[i + 1] === nums[i]) {
      i++
    }
  }
  return result
}

console.log(threeSum(nums))

// Учитывая целочисленный массив nums, верните все тройки [nums[i], nums[j], nums[k]]такие, что i != j, i != k, и j != k, и nums[i] + nums[j] + nums[k] == 0.

// Обратите внимание, что набор решений не должен содержать повторяющихся троек.

// Пример 1:

// Ввод: nums = [-1,0,1,2,-1,-4]
//  Выход: [[-1,-1,2],[-1,0,1]]
//  Пояснение:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// Отдельные тройки — это [-1,0,1] и [-1,-1,2].
// Обратите внимание, что порядок вывода и порядок троек не имеют значения.
// Пример 2:

// Ввод: nums = [0,1,1]
//  Выход: []
//  Объяснение: Единственная возможная тройка не дает в сумме 0.
// Пример 3:

// Ввод: nums = [0,0,0]
//  Выход: [[0,0,0]]
//  Объяснение: Единственная возможная тройка в сумме дает 0.
