// solution 2;

let str = 'aaa'

const countSubstrings2 = (s) => {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    let left = i
    let right = i
    calculate(left, right)
    calculate(left, right + 1)
  }

  function calculate(left, right) {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      count++
      left--
      right++
    }
  }

  return count
}

console.log(countSubstrings2(str))

// Дана строка s, возвращает количество палиндромных подстрок в ней .

//Строка является палиндромом , если она читается как в прямом, так и в обратном направлении.

//Подстрока — это непрерывная последовательность символов внутри строки .
