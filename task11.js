const lengthOfLongestSubstring = (s) => {
  let substr = s[0]
  let longStr = substr
  if (s.length === 0) {
    return 0
  }

  let j = 0
  for (let i = j + 1; i < s.length; i++) {
    if (s.slice(j, i).split('').includes(s[i])) {
      ++j
      i = j
    } else {
      sub = s.slice(j, i + 1)
    }

    if (sub.length > longStr.length) {
      longStr = sub
    }
  }
  return longStr.length
}

// Учитывая строку s, найдите длину самой длинной
// подстрока
// без повторения символов.

// Пример 1:

// Ввод: s = "abcabcbb"
//  Вывод: 3
//  Объяснение: Ответ: "abc" длиной 3.
// Пример 2:

// Ввод: s = «bbbbb»
//  Вывод: 1
//  Объяснение: Ответ — «b» длиной 1.
// Пример 3:

// Ввод: s = "pwwkew"
//  Вывод: 3
//  Объяснение: Ответ: "wke" длиной 3.
// Обратите внимание, что ответ должен быть подстрокой, «pwke» — это подпоследовательность, а не подстрока.

// const binarySearch = (arr, target) => {
//   let left = 0
//   let right = arr.length - 1
//   let middle

//   while (left <= right) {
//     middle = Math.round((right - left) / 2) + left

//     if (target === arr[middle]) {
//       return middle
//     } else if (target < arr[middle]) {
//       right = middle - 1
//     } else {
//       left = middle + 1
//     }
//   }
//   return -1
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
