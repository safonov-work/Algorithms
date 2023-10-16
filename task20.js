// solution 1;

const nums = [-2, 3, -4]

const maxProduct = (nums) => {
  let result = nums[0]
  let max = nums[0]
  let min = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let localMax = Math.max(max * nums[i], nums[i], min * nums[i])
    let localMin = Math.min(max * nums[i], nums[i], min * nums[i])

    max = Math.max(localMax, localMin)
    min = Math.min(localMax, localMin)

    result = Math.max(result, currMax)
  }

  return result
}

console.log(maxProduct(nums))

// Учитывая целочисленный массив nums, найдите
// подмассив
// который имеет самый большой продукт, и возвращает продукт .

// Тестовые случаи генерируются таким образом, чтобы ответ соответствовал 32-битному целому числу.

// Пример 1:

// Ввод: nums = [2,3,-2,4]
//  Выход: 6
//  Объяснение: [2,3] имеет наибольшее произведение 6.
// Пример 2:

// Ввод: nums = [-2,0,-1]
//  Вывод: 0
//  Объяснение: Результат не может быть 2, поскольку [-2,-1] не является подмассивом.
