let string = 'babad'

const longestPalindrome = (str) => {
  let start = 0
  let end = 0

  for (let i = 0; i < str.length; i++) {
    let len1 = checkMiddle(str, i, i)
    let len2 = checkMiddle(str, i, i + 1)
    let len = Math.max(len1, len2)

    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2)
      end = Math.floor(i + len / 2)
    }
  }

  function checkMiddle(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--
      right++
    }

    return right - left - 1
  }

  return str.substring(start, end + 1)
}

console.log(longestPalindrome(string))

// Учитывая строку s, верните самую длинную
// палиндромный

// подстрока
// в s.

// Пример 1:

// Ввод: s = "babad"
//  Вывод: "bab"
//  Объяснение: "aba" также является допустимым ответом.
// Пример 2:

// Ввод: s = «cbbd»
//  Выход: «bb»
